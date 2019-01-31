import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {HelpLevel} from "./HelpLevel";

import values from "lodash/values";
import includes from "lodash/includes";

export class HelpDecision extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };

        this.activeItem = this.activeItem.bind(this);
    }

    buildChildLevel = (decisionData, childDepth, activeTrail) => {

        return (

            <HelpLevel key={`${childDepth}:${decisionData.ID}`}
                       data={decisionData.wpse_children}
                       root={false}
                       depth={childDepth}
                       parent={decisionData.ID}
                       activeItem={this.activeItem}
                       activeTrail={activeTrail} />

        )

    };

    handleClick(data, e) {

        e.preventDefault();

        this.setState({expanded: true});

        this.props.activeItem({
            ID: data.ID,
            depth: this.props.depth + 1
        });

    }

    activeItem(activeItem){
        this.setState({
            activeItem: activeItem
        });

        this.props.activeItem({
            ID: activeItem.ID,
            depth: activeItem.depth
        });
    }

    render() {

        const {decision, depth, activeTrail} = this.props;
        let childLevel = null;


        /*
         * determine if parent in activeTrail
         */

        let activeTrailVals = values(activeTrail);
        let activeComponent = includes(activeTrailVals, decision.ID);


        /*
         * if has children and parent in activeTrail
         */

        if (decision.wpse_children && activeComponent) {

            let childDepth = depth + 1;
            childLevel = this.buildChildLevel(decision, childDepth, activeTrail)

        }

        return (
            <div className="utk-help-wrapper">
                <a href={decision.url} className='utk-help-decision' onClick={(e) => this.handleClick(decision, e)}>{decision.title}</a>
                {childLevel}
            </div>
        );

    }
}

HelpDecision.propTypes = {
    activeItem: PropTypes.func
};