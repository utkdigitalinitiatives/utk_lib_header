import React, {Component} from 'react';
import {MenuColumns} from "./MenuColumns";

import {MenuSecondary} from "./MenuSecondary";
import {Hours} from "./Hours";
import {Help} from "./Help";
import Globals from "./Globals";
import {Chat} from "./Chat";
import {Locations} from "./Locations";

const ENDPOINT = 'assets/wp-json/libmenu';
const ROUTE = '/drawer';


export class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menuDrawer: [],
            activeMenu: 0,
            activeDepth: 0,
            activeHelp: 0
        };
    }

    setLayout() {

    }

    updateDimensions = () => {

        if (window.matchMedia("(min-width: 992px)").matches) {
            this.setState({activeMenu: 0})
        }

    }

    optionListener = (e) => {
        if (e.srcElement.dataset.event === 'option-help-expand') {
            e.stopPropagation();
            this.setState({activeHelp: 1});
        }
    }

    getParameterByName = (name, url) => {
        if (!url) url = window.location.href;
        name = name.replace(/[[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    componentDidMount() {

        window.addEventListener("resize", this.updateDimensions);
        window.addEventListener("click", this.optionListener);

        const help = this.getParameterByName('help');

        if (help) {
            this.setState({activeHelp: 1});
        }

        const sessionMenu = 'utk_lib_header_drawer';

        if (sessionStorage.getItem(sessionMenu) === null) {

            fetch(Globals.URL + ENDPOINT + ROUTE, {
                    headers : {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(data => {

                    sessionStorage.setItem(sessionMenu, JSON.stringify(data));
                    this.setState({menuDrawer: data})

                })
                .catch(err => console.error(this.props.url, err.toString()));

        } else {

            const sessionData = sessionStorage.getItem(sessionMenu);
            this.setState({menuDrawer: JSON.parse(sessionData)});

        }

        return null
    }

    componentWillUnmount () {
        window.removeEventListener("resize", this.updateDimensions);
    }

    componentWillReceiveProps(propUpdate) {

        /*
         * Updates help to ensure it is not expanded on menu retoggle.
         */

        if (propUpdate.active === '') {
            this.setState({activeHelp: 0});
        }

    }

    setMenu = (passedMenuId) => {
        this.setState({activeMenu: passedMenuId});
        this.setState({activeDepth: 1});
        this.setState({activeHelp: 0});
    };

    resetMenu = () => {
        this.setState({activeMenu: 0});
        this.setState({activeDepth: 0});
        this.setState({activeHelp: 0});
    };

    enableHelp = () => {
        this.setState({activeHelp: 1});
    };

    closeHelp() {
        this.setState({activeHelp: 0});
    };

    render() {

        const {active} = this.props;
        const {menuDrawer, activeMenu, activeDepth, activeHelp, status} = this.state;

        let menuColumns, menuSecondary = {};
        let depthClass = 'utk-menu-depth--' + activeDepth;

        let helpClass = null;

        if (activeHelp) {
            helpClass = 'utk-help-expand';
        }

        menuColumns = Object.entries(menuDrawer).map((columns, index) => {
            return (
                <MenuColumns key={index} items={columns[1].data} activeMenu={this.setMenu}/>
            );
        });

        // if (status === 'default') {
            return (
                <React.Fragment>
                <div className={`utk-header-resources ${active} ${helpClass} ${depthClass}`}>
                    <div className="utk-header-super">
                        <div className="container">
                            <ul className="utk-header-super--menu">
                                <li><span className="icon-right-big"></span></li>
                                <li><a href="https://www.lib.utk.edu/hours/">Hours</a></li>
                                <li><a href="https://www.lib.utk.edu/hours/">Reserve a Room</a></li>
                                <li><a href="https://libguides.utk.edu/databases">Request Items</a></li>
                                <li><a href="https://www.lib.utk.edu/about/">Talk with a Librarian</a></li>
                                <li><a href="https://www.lib.utk.edu/about/">A-Z</a></li>
                            </ul>
                            <div className='utk-menu-options'>
                                <div className='utk-menu-help'>
                                    {/*<a className="utk-menu-help--item utk-menu-help--help-me" onClick={this.enableHelp}>*/}
                                        {/*<h4>Help</h4>*/}
                                        {/*<div className="utk-menu-help--item--icon">*/}
                                            {/*<span className="icon-shuffle"></span>*/}
                                        {/*</div>*/}
                                    {/*</a>*/}
                                    {/*<a className="utk-menu-help--item utk-menu-help--give">*/}
                                        {/*<h4>Give</h4>*/}
                                        {/*<div className="utk-menu-help--item--icon">*/}
                                            {/*<span className="icon-heart"></span>*/}
                                        {/*</div>*/}
                                    {/*</a>*/}
                                    <Chat libchat={Globals.libChat} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="utk-resources-menu">
                            <div className="utk-resources-menu--row">
                                {menuColumns}
                            </div>
                            <div className="utk-resources-menu--row">
                                more...
                            </div>
                        </div>
                        <div className="utk-resources-contact">
                            <Hours layout={this.setLayout()} expanded={this.props.expanded}/>
                        </div>
                        {/*<Help activeHelp={this.state.activeHelp} closeHelp={() => {*/}
                            {/*this.closeHelp();*/}
                        {/*}} />*/}
                        <a className="utk-resources-close" data-event="option-resources-close">
                            <span className="icon-cancel" data-event="option-resources-close"></span>
                        </a>
                    </div>
                </div>
                </React.Fragment>
            )
        // } else if (status === 'map') {
        //     return (
        //         <div className={`utk-header-resources ${active} ${helpClass} ${depthClass}`}>
        //             <div className="container">
        //                 <div className="utk-resources-toggle">
        //                     <a className="utk-resources-toggle--default" onClick={this.toggleDefault}>Close Map</a>
        //                 </div>
        //             </div>
        //         </div>
        //     )
        // }



    }
}
