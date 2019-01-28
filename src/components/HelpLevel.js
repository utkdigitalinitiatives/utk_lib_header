import React, {Component} from 'react';
import {HelpDecision} from "./HelpDecision";

export class HelpLevel extends Component {

    constructor(props) {
        super(props);
    }

    buildDecisions = (data, root, depth, parent) => {

        if (data) {

            const decisions = Object.entries(data).map((decision, index) => {

                return (

                    <HelpDecision key={`${depth}:${parent}:${decision[1].ID}`} decision={decision[1]} />

                )

            });

            return decisions;

        } else {

            return null

        }

    };

    render() {

        const {data, root, parent, depth} = this.props;

        let decisionTree = this.buildDecisions(data, root, depth, parent);

        return (
            <div>
                <h3>This is a level.</h3>
                {decisionTree}
            </div>
        );

    }
}