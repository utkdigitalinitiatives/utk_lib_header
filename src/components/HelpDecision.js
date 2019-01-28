import React, {Component} from 'react';
import {HelpLevel} from "./HelpLevel";

export class HelpDecision extends Component {

    constructor(props) {
        super(props);
    }

    buildChildLevel = (childData) => {

        return (

            <HelpLevel key="0:0"
                       data={childData}
                       root={false}
                       depth={0}
                       parent={0} />

        )

    };

    render() {

        const {decision} = this.props;
        let childLevel = null;

        if (decision.wpse_children) {

            childLevel = this.buildChildLevel(decision.wpse_children)

        }

        return (
            <div>
                <a href={decision.url} className='utk-help-decision'>{decision.title}</a>
                {childLevel}
            </div>
        );

    }
}