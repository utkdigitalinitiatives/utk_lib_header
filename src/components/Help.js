import React, {Component} from 'react';
import {HelpDecision} from "./HelpDecision";
import Globals from "./Globals";

const ENDPOINT = 'assets/wp-json/libmenu';
const ROUTE = '/action';

export class Help extends Component {

    constructor(props) {

        super(props);

        this.utkHelp = React.createRef();
        this.utkHelpContent = React.createRef();

        this.state = {
            menuHelp: [],
            menuHelpCenter: true
        };

    }

    componentDidMount() {

        window.addEventListener("resize", this.checkHelpHeight);

        this.checkHelpHeight();

        /*
         * @todo: add browser variable to store menu data in session.
         */

        fetch(Globals.URL + ENDPOINT + ROUTE, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({menuHelp: data})
            })
            .catch(err => console.error(this.props.url, err.toString()));

        return null

    }

    componentWillUnmount () {
        window.removeEventListener("resize", this.checkHelpHeight);
    }

    checkHelpHeight = () => {

        if (this.utkHelp.current && this.utkHelpContent.current) {

            console.log(this.utkHelp.current.offsetHeight);
            console.log(this.utkHelpContent.current.offsetHeight);

            let helpOffset = 100;

            if (this.utkHelp.current.offsetHeight - helpOffset < this.utkHelpContent.current.offsetHeight) {
                this.setState({menuHelpCenter: false})
            } else {
                this.setState({menuHelpCenter: true})
            }

        }

    };

    buildDecisions = (helpData) => {

        if (helpData) {

            const decisions = Object.entries(helpData).map((help, index) => {

                return (

                    <HelpDecision key={index} branch={help[1]} />

                )

            });

            return decisions;

        } else {

            return null

        }

    };

    render() {

        const {activeHelp, closeHelp} = this.props;
        const {menuHelp, menuHelpCenter} = this.state;

        let decisionTree = this.buildDecisions(menuHelp);
        let utkHelpAlignClass = null;

        if (menuHelpCenter === false)
            utkHelpAlignClass = 'utk-help-align-top';
        else
            utkHelpAlignClass = 'utk-help-align-center';

        if (activeHelp) {

            return (

                <div ref={this.utkHelp} className={`utk-help ${utkHelpAlignClass}`}>
                    <a className="utk-menu-help--item utk-menu-help--help-me--back" onClick={closeHelp}>
                        <span className="icon-down-open"></span>
                    </a>
                    <div ref={this.utkHelpContent} className="utk-help-content" id="utk-help-content">
                        <h3>Need help with something?</h3>
                        <p>We'll try to find that for you.</p>
                        {decisionTree}
                    </div>
                </div>

            );

        } else {

            return null;

        }
    }
}