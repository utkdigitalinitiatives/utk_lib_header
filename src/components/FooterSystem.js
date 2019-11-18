import React, {Component} from 'react';

export class FooterSystem extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {

        return (
            <section className="utk-footer footer-system">
                <div className="container">
                    <div className="footer-system--inner">
                        <a href="http://tennessee.edu" className="footer-system--logo">
                            <span className="sr-only">University of Tennessee System</span>
                            <img
                                src="{{$ut_system}}"
                                alt="University of Tennessee System"
                            />
                        </a>
                        <p className="footer-system--text">The flagship campus of <a href="http://tennessee.edu">the
                            University of Tennessee System</a> and partner in <a
                            href="http://www.tntransferpathway.org/">the Tennessee Transfer Pathway</a>.</p>
                    </div>
                </div>
            </section>
        )
    }
}
