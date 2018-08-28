import React, {Component} from 'react';

export class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {active} = this.props;

        return (
            <div className={`utk-header-resources ${active}`}>
                <a className="utk-resources-close">
                    <span className="icon-cancel"></span>
                </a>
                <div className="utk-container">
                    <div className="utk-resources-contact">

                        <p>
                            1015 Volunteer Boulevard<br/>
                            Knoxville, TN 37996-1000<br/>
                            <a href="tel:865-974-4351">865-974-4351</a>
                        </p>

                        <div className="utk-resources-contact--social">
                            <a>
                                <span className="icon-facebook"></span>
                            </a>
                            <a>
                                <span className="icon-instagram"></span>
                            </a>
                            <a>
                                <span className="icon-twitter"></span>
                            </a>
                            <a>
                                <span className="icon-pinterest-circled"></span>
                            </a>
                            <a>
                                <span className="icon-youtube-play"></span>
                            </a>
                        </div>
                    </div>
                    <div className="utk-resources-menu">
                        <div className="utk-resources-menu--col">

                            <h3>Find Materials</h3>
                            <a>One Search</a>
                            <a>Articles and Databases</a>
                            <a>E-Journals</a>
                            <a>Course Reserves</a>
                            <a>Digital Collections</a>
                            <a>Special Collections</a>
                            <a>Government Information</a>
                            <a>UT Dissertations</a>
                            <a>Streaming Video</a>

                        </div>
                        <div className="utk-resources-menu--col">

                            <h3>Quick Links</h3>
                            <a>Undergraduates</a>
                            <a>Graduate Students</a>
                            <a>Distance Students</a>
                            <a>Faculty & Instructors</a>
                            <a>Patrons with Disabilities</a>
                            <a>Community</a>

                            <h3>Research Help</h3>
                            <a>By Subject</a>
                            <a>By Librarian</a>
                            <a>Frequently Asked Questions</a>

                        </div>
                        <div className="utk-resources-menu--col">
                            <h3>About</h3>
                            <a>Library Hours</a>
                            <a>Libraries and Locations</a>
                            <a>Maps & Directions</a>
                            <a>Libraries and Locations</a>
                            <a>Staff Directory</a>
                            <a>Libraries A-Z</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}