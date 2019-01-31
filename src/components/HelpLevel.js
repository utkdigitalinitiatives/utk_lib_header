import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {HelpDecision} from "./HelpDecision";

export class HelpLevel extends Component {

    constructor(props) {
        super(props);
        this.activeItem = this.activeItem.bind(this);
    }

    activeItem(activeData) {

        this.setState({
            activeItem: activeData
        });

        this.props.activeItem({
            ID: activeData.ID,
            depth: activeData.depth
        });
    }

    buildDecisions = (data, root, depth, parent, activeTrail) => {

        /*
         * if activeComponent and has data
         */

        if (data) {

            return Object.entries(data).map((decision, index) => {

                return (

                    <HelpDecision
                        key={`${depth}:${parent}:${decision[1].ID}`}
                        decisionID={decision[1].ID}
                        depth={depth}
                        parent={parent}
                        decision={decision[1]}
                        activeItem={this.activeItem}
                        activeTrail={activeTrail} />

                )

            });

        } else {

            return null

        }

    };

    render() {

        const {data, root, parent, depth, activeTrail} = this.props;

        let decisionTree = this.buildDecisions(data, root, depth, parent, activeTrail);

        return (
            <div className={`utk-help-level utk-help-level-${depth}`}>
                {decisionTree}
            </div>
        );

    }
}

HelpLevel.propTypes = {
    activeItem: PropTypes.func
};