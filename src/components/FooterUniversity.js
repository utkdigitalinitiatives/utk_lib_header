import React, {Component} from 'react';

export class FooterUniversity extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {

        return (
            <section className="utk-footer footer-university">
                <div className="container">
                    <div className="footer-university--inner">
                        <div className="footer-university--anchor">
                            <div className="footer-university--identity">
                                <div className="footer-university--identity--brand">
                                    <a href="https://www.utk.edu" className="footer-university--identity--brand--logo">
                                        <span className="sr-only">The University of Tennessee</span>
                                        <img
                                            src="{{$ut_square}}"
                                            alt="University of Tennessee"
                                        />
                                    </a>
                                </div>
                                <p>
                                    <strong className="footer-university--title">The University of Tennessee,
                                        Knoxville</strong>
                                    Knoxville, TN 37996<br/>
                                    <a href="tel:865-974-1000" title="Call UT Libraries - 865-974-1000">865-974-1000</a>
                                </p>
                            </div>
                        </div>
                        <div className="footer-university--more">
                            <div className="footer-university--search">
                                <form className="footer-university--search--form" id="utk_seek" name="utk_seek"
                                      method="post" accept-charset="iso-8859-1"
                                      action="//www.utk.edu/masthead/query.php">
                                    <div className="form-group">
                                        <input type="text" name="qt" placeholder="Search utk.edu"
                                               onFocus="if(this.value == 'Search utk.edu') { this.value = ''; }"
                                               value="Search utk.edu" className="form-control" title="search" speech=""
                                               x-webkit-speech="" />
                                    </div>
                                    <input type="hidden" name="qtype" className="searchtext" value="utk"
                                           title="search type" />
                                    <input name="go" type="submit" aria-label="Search utk.edu" title="Submit"
                                           className="btn btn-primary" value="Search" />
                                </form>
                            </div>
                            <div className="footer-university--menu">
                                @include('partials.components.footer-university-menu')
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
