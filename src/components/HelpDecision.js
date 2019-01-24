import React, {Component} from 'react';

export class HelpDecision extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {branch} = this.props;

        let hasChildren = false;
        if (branch.wpse_children) { hasChildren = true; }

        return (
            <a href={branch.url} className='utk-help-decision'>{branch.title}</a>
        );

    }
}