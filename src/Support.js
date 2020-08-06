import React, {Component} from 'react';
import Globals from "./components/Globals";

import media from './media/support.jpg';
import {Chat} from "./components/Chat";

/* header component */
class Support extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        let support = true

        if (support) {

            return (
                <div className="utk-support container">
                    <div className="utk-support--header">
                        <div className="utk-support--header--lead">
                            <h2>We're here to help</h2>
                            <p>UT Libraries always has your back. Connect with us now - from wherever you are.</p>
                            <div className="utk-support--header--lead--buttons">
                                <Chat libchat="8a9fa354ff9adc8c085107bc41e587c8" />
                                <a className="btn btn-md btn-with-icon btn-faq">
                                    Browse FAQ
                                    <span className="icon-down-open"></span>
                                </a>
                            </div>
                        </div>
                        <figure>
                            <img src={media} />
                        </figure>
                    </div>
                    <div className="utk-support--actions">
                        <a href="#" className="utk-support--actions--item">
                            <h3>Call <span>865-940-0821</span></h3>
                        </a>
                        <a href="#" className="utk-support--actions--item">
                            <h3>Text <span>865-940-0821</span></h3>
                        </a>
                        <a href="#" className="utk-support--actions--item">
                            <h3>Request <span>Consultation</span></h3>
                        </a>
                        <a href="#" className="utk-support--actions--item">
                            <h3>Provide <span>Feedback</span></h3>
                        </a>
                        <a href="#" className="utk-support--actions--item">
                            <h3>Visit <span>Service Desk</span></h3>
                        </a>
                    </div>
                </div>
            );

        } else {
            return null
        }

    }
}

export default Support;
