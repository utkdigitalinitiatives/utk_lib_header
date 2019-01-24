import React, {Component} from 'react';
import {HelpDecision} from "./HelpDecision";
import Globals from "./Globals";
import {MenuColumns} from "./MenuColumns";

const ENDPOINT = 'assets/wp-json/libmenu';
const ROUTE = '/action';

export class Help extends Component {

    constructor(props) {

        super(props);

        this.state = {
            menuHelp: []
        };

    }

    componentDidMount() {

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

    buildDecisions = (helpData) => {

        const decisions = Object.entries(helpData).map((help, index) => {

            return (

                <HelpDecision branch={help[1]} />

            )

        });

        return decisions;

    };

    render() {

        const {activeHelp, closeHelp} = this.props;
        const helpData = this.state.menuHelp;

        let decisionTree = this.buildDecisions(helpData);

        if (activeHelp) {

            return (

                <div className="utk-help">
                    <a className="utk-menu-help--item utk-menu-help--help-me--back" onClick={closeHelp}>
                        <span className="icon-down-open"></span>
                    </a>
                    <div>
                        <h3>Need Help?</h3>
                        {decisionTree}
                    </div>
                </div>

            );

        } else {

            return null;

        }
    }
}