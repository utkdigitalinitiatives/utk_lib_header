import React, {Component} from 'react';
import {MenuColumns} from "./MenuColumns";
import {MenuItems} from "./MenuItems";

import _ from "lodash";
import {MenuSecondary} from "./MenuSecondary";
import {Hours} from "./Hours";
import {Help} from "./Help";
import Globals from "./Globals";
import {Search} from "./Search";

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
        name = name.replace(/[\[\]]/g, '\\$&');
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

        if (propUpdate.active == '') {
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
        const {menuDrawer, activeMenu, activeDepth, activeHelp} = this.state;

        let menuColumns, menuSecondary = {};
        let depthClass = 'utk-menu-depth--' + activeDepth;

        let helpClass = null;

        if (activeHelp) {
            helpClass = 'utk-help-expand';
        }

        if (activeMenu === 0 || window.matchMedia("(min-width: 992px)").matches) {
            menuColumns = Object.entries(menuDrawer).map((columns, index) => {
                return (
                    <MenuColumns items={columns[1].data} activeMenu={this.setMenu}/>
                );
            });
            menuSecondary = <div className="utk-secondary-menu"></div>;
        } else {

            let secondary = Object.entries(menuDrawer).map((columns, index) => {
                return Object.entries(columns[1].data).map((secondary, index) => {
                    if (secondary[1].id === activeMenu) {
                        let {id, title, url, classes, target, dropdown} = secondary[1];
                        let dropdownItems = '';
                        if (dropdown) {
                            dropdownItems = Object.entries(dropdown).map((link, index) => {

                                let {title, url, classes, target} = link[1];

                                return (
                                    <a href={url} tabIndex="4">{title}</a>
                                );

                            });
                        }
                        return (
                            <div className="utk-secondary-menu">
                                <div className="utk-secondary-menu--options">
                                    <a className="utk-menu-back" tabIndex="4" onClick={this.resetMenu}>
                                        <span className="icon-left-open"></span>
                                    </a>
                                </div>
                                <MenuSecondary menuId={id} title={title} dropdownItems={dropdownItems}/>
                            </div>
                        );
                    }
                });
            });

            menuColumns = <div></div>;
            menuSecondary = secondary;
        }

        return (
            <div className={`utk-header-resources ${active} ${helpClass} ${depthClass}`}>
                <div className="container">
                    <div className="utk-resources-menu">
                        {menuColumns}
                        {menuSecondary}
                    </div>
                    <div className="utk-resources-contact">
                        <Hours/>
                    </div>
                    <div className='utk-menu-options'>
                        <div className='container'>
                            <div className='utk-menu-help'>
                                <a className="utk-menu-help--item utk-menu-help--help-me" onClick={this.enableHelp}>
                                    <h4>Help</h4>
                                    <div className="utk-menu-help--item--icon">
                                        <span className="icon-shuffle"></span>
                                    </div>
                                </a>
                                <a className="utk-menu-help--item utk-menu-help--chat">
                                    <h4>Chat</h4>
                                    <div className="utk-menu-help--item--icon">
                                        <span className="icon-chat"></span>
                                    </div>
                                </a>
                            </div>
                            <a className="utk-resources-close">
                                <span className="icon-cancel"></span>
                            </a>
                            <Help activeHelp={this.state.activeHelp} closeHelp={() => {
                                this.closeHelp();
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}