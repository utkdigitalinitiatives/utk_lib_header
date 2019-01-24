import React, {Component} from 'react';

export class HelpDecision extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {branch} = this.props;

        console.log(branch);

        return (
            <a href='#'>Decision</a>
        );

    }
}