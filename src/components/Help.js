import React, {Component} from 'react';

export class Help extends Component {

    render() {

        let {active} = this.props;

        if (active) {

            return (
                <div className="utk-help">
                    <a className="utk-menu-help--item utk-menu-help--help-me--back">
                        <span className="icon-up-open"></span>
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