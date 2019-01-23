import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Help extends Component {

    constructor(props) {
        super(props);

        this.activeHelp = this.activeHelp.bind(this);
    }

    activeHelp = (status) => {
        this.props.activeHelp(status);
    }

    render() {

        let {activeHelp} = this.props;

        if (activeHelp) {

            return (
                <div className="utk-help">
                    <a className="utk-menu-help--item utk-menu-help--help-me--back" onClick={() => this.activeHelp(false)}>
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

Help.propTypes = {
    activeHelp: PropTypes.func
};