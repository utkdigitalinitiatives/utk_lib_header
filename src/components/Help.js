import React, {Component} from 'react';
import Globals from "./Globals";
import {HelpLevel} from "./HelpLevel";

import assign from "lodash/assign"
import pick from "lodash/pick"
import keys from "lodash/keys"

const ENDPOINT = 'assets/wp-json/libmenu';
const ROUTE = '/action';

export class Help extends Component {

    constructor(props) {

        super(props);

        this.utkHelp = React.createRef();
        this.utkHelpContent = React.createRef();

        this.state = {
            menuHelp: [],
            menuHelpCenter: false,
            activeTrail: {
                0: 0
            },
            activeItem: {
                ID: 0,
                depth: 0
            }
        };

        this.activeItem = this.activeItem.bind(this);
    }

    componentDidMount() {

        window.addEventListener("resize", this.checkHelpHeight);

        this.checkHelpHeight();

        const sessionHelp = 'utk_lib_header_help';

        if (sessionStorage.getItem(sessionHelp) === null) {

            fetch(Globals.URL + ENDPOINT + ROUTE, {
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {

                    sessionStorage.setItem(sessionHelp, JSON.stringify(data));
                    this.setState({menuHelp: data})

                })
                .catch(err => console.error(this.props.url, err.toString()));

        } else {

            const sessionData = sessionStorage.getItem(sessionHelp);
            this.setState({menuHelp: JSON.parse(sessionData)});

        }

        return null

    }

    componentWillUnmount () {
        window.removeEventListener("resize", this.checkHelpHeight);
    }

    checkHelpHeight = () => {

        if (this.utkHelp.current && this.utkHelpContent.current) {

            let helpOffset = 100;

            if (this.utkHelp.current.offsetHeight - helpOffset < this.utkHelpContent.current.offsetHeight) {
                this.setState({menuHelpCenter: false})
            } else {
                this.setState({menuHelpCenter: true})
            }

        }

    };

    pruneActiveTrail = (activeTrail, depth) => {

        let count = 0;
        const model = {};

        do {

            let iteration = {
                [count]: null
            };
            assign(model, iteration);
            count++;

        } while (depth >= count);

        return pick(activeTrail, keys(model));

    };

    activeItem(activeItem) {

        let {depth, ID} = activeItem;
        let updateActiveTrail = {
            [depth] : ID
        };

        let renderTrail = this.pruneActiveTrail(assign(this.state.activeTrail, updateActiveTrail), depth);

        this.setState({
            activeTrail: renderTrail
        });

    }

    render() {

        const {activeHelp, closeHelp} = this.props;
        const {menuHelp, menuHelpCenter, activeTrail} = this.state;

        let utkHelpAlignClass = null;

        if (menuHelpCenter === false)
            utkHelpAlignClass = 'utk-help-align-top';
        else
            utkHelpAlignClass = 'utk-help-align-top';

        if (activeHelp) {

            return (

                <div ref={this.utkHelp} className={`utk-help ${utkHelpAlignClass}`}>
                    <a className="utk-menu-help--item utk-menu-help--help-me--back" onClick={closeHelp}>
                        <span className="icon-down-open"></span>
                    </a>
                    <div ref={this.utkHelpContent} className="utk-help-content" id="utk-help-content">
                        <h3>Need help with something?</h3>
                        <p>We'll try to find that for you.</p>
                        <HelpLevel key="0:0"
                                   data={menuHelp}
                                   root={true}
                                   depth={0}
                                   parent={0}
                                   activeItem={this.activeItem}
                                   activeTrail={activeTrail} />
                    </div>
                </div>

            );

        } else {

            return null;

        }
    }
}