import React, {Component} from 'react';
import {FooterSections} from "./components/FooterSections";

/* header component */
class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    };

    render() {

        return (
            <React.Fragment>
                <FooterSections />
                <div className="utk-lib-triggers">
                    <span id="utk-trigger-header"></span>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;
