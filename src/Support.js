import React, {Component} from 'react';
import Globals from "./components/Globals";

import media from './media/support.jpg';

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
                            <h1>We're here to help</h1>
                            <p>UT Libraries always has your back. Connect with us now - from wherever you are.</p>
                        </div>
                        <figure>
                            <img src={media} />
                        </figure>
                    </div>
                    <div className="utk-support--actions">

                    </div>
                </div>
            );

        } else {
            return null
        }

    }
}

export default Support;
