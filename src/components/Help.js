import React, {Component} from 'react';

export class Help extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let {activeHelp, closeHelp} = this.props;

        if (activeHelp) {

            return (
                <div className="utk-help">
                    <a className="utk-menu-help--item utk-menu-help--help-me--back" onClick={closeHelp}>
                        <span className="icon-down-open"></span>
                    </a>
                    <div>
                        <h3>Need Help?</h3>
                    </div>
                </div>
            );

        } else {

            return null;

        }
    }
}