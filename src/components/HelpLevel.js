import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {HelpDecision} from "./HelpDecision";

import sortBy from "lodash/sortBy";

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

            return Object.entries(sortBy(data, ['menu_order'])).map((decision, index) => {

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

    handleBack (parent, depth, activeTrail, e) {

        e.preventDefault();

        this.props.activeItem({
            ID: activeTrail[depth - 1],
            depth: depth - 1
        });

        return null

    }

    renderBack (parent, depth, activeTrail) {

        return (
            <a href="#back" className="utk-help-back" onClick={(e) => this.handleBack(parent, depth, activeTrail, e)}>
                <span className="icon-left-open"></span> Back
            </a>
        )

    }

    renderPrefixRoot = () =>{

        return (
            <div className="utk-help-root-prefix">
                Start Here
            </div>
        )

    }


    render() {

        const {data, root, parent, depth, activeTrail} = this.props;

        let decisionTree = this.buildDecisions(data, root, depth, parent, activeTrail);
        let prefix = this.renderPrefixRoot();

        if (depth !== 0)
            prefix = this.renderBack(parent, depth, activeTrail);

        return (
            <div className={`utk-help-level utk-help-level-${depth}`}>
                {prefix}
                {decisionTree}
            </div>
        );

    }
}

HelpLevel.propTypes = {
    activeItem: PropTypes.func
};