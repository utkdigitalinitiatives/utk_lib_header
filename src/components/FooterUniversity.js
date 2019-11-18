import React, {Component} from 'react';
import {MenuColumns} from "./MenuColumns";

export class FooterUniversity extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        const {university} = this.props;

        let menuColumns = Object.entries(university).map((columns, index) => {
            return (
                <MenuColumns key={index}
                             items={columns[1]}
                             activeMenu={this.setMenu}
                             noTitle={true} />
            );
        });

        return (
            <section className="utk-footer footer-university">
                <div className="container">
                    <div className="footer-university--inner">
                        <div className="footer-university--anchor">
                            <div className="footer-university--identity">
                                <div className="footer-university--identity--brand">
                                    <a href="https://www.utk.edu" className="footer-university--identity--brand--logo">
                                        <span className="sr-only">The University of Tennessee</span>
                                        <xml version="1.0" encoding="utf-8"/>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             width="200.1px" height="45.4px" viewBox="206 373.3 200.1 45.4"
                                             enable-background="new 206 373.3 200.1 45.4">
                                            <g>
                                                <rect x="206" y="373.7" class="utk-svg-orange" width="44.3" height="44.3"/>
                                                <path class="utk-svg-orange" d="M267.5,387c0,2.1-1.7,3.3-4.5,3.3h-6.2v-6.5h5.8C265.8,383.8,267.5,385,267.5,387L267.5,387L267.5,387z
		 M262.2,381.9h-5.5v-6.4h5.6c2.6,0,4.1,1.2,4.1,3v0.1C266.5,380.8,264.7,381.9,262.2,381.9 M265.7,382.6c1.4-0.6,2.9-1.9,2.9-4.3
		v-0.1c0-1.2-0.4-2.2-1.2-2.9c-1-1-2.7-1.6-4.8-1.6h-7.8v18.5h8.2c4,0,6.7-1.9,6.7-5v-0.1C269.6,384.6,267.9,383.3,265.7,382.6"/>
                                                <rect x="271.8" y="373.7" class="utk-svg-orange" width="2.1" height="18.5"/>
                                                <path class="utk-svg-orange" d="M285.3,392.5c3.1,0,5.7-1.3,7.4-2.8v-7.4h-7.6v1.9h5.6v4.6c-1.3,1-3.2,1.9-5.3,1.9c-4.5,0-7.3-3.3-7.3-7.7
		v-0.1c0-4.1,2.9-7.6,7-7.6c2.6,0,4.2,0.9,5.6,2.1l1.3-1.6c-1.8-1.6-3.8-2.5-6.9-2.5c-5.5,0-9.3,4.5-9.3,9.5v0.1
		C275.9,388.3,279.5,392.5,285.3,392.5"/>
                                                <path class="utk-svg-orange" d="M394.9,387.1v-2h9v-4.4h-9v-1.9h9.7v-5.1h-15.8v7.6H380v4h3.2v1.9c-0.5,0.3-1,0.4-2.1,0.4
		c-2.6,0-4.4-1.8-4.4-4.4v-0.1c0-2.5,1.7-4.3,4.2-4.3c1.5,0,2.9,0.6,4.1,1.6l3.5-4.2c-2-1.7-4.5-2.8-7.7-2.8c-4.9,0-8.8,2.9-9.9,7.1
		v-6.7h-6.1v8.1l-6.6-8.1h-5.8v16.5l-6.9-16.6h-6.1l-7,16.8l-3.1-4.5c2.3-1.1,3.6-2.9,3.6-5.7v-0.1c0-1.9-0.6-3.3-1.7-4.4
		c-1.3-1.3-3.4-2.1-6.6-2.1h-9v7.7c-0.7-4.6-4.8-8.1-9.9-8.1c-5.7,0-10.1,4.3-10.1,9.6v0.1c0,5.4,4.3,9.6,10,9.6
		c5.2,0,9.3-3.5,10-8.2v7.8h6.2v-5.3h1.3l3.5,5.3h5.1h2h4.6l0.9-2.5h6.5l1,2.5h5.9h0.8h5.3v-8.5l6.9,8.5h5.5v-6.7
		c1.1,4.3,5.2,7.1,10,7.1c3.3,0,6-1.1,8-2.6v2.3h15.9v-5.1L394.9,387.1L394.9,387.1z M309.3,383c0,2.2-1.5,4.1-3.8,4.1
		c-2.4,0-3.9-2-3.9-4.2v-0.1c0-2.2,1.5-4.1,3.8-4.1C307.8,378.7,309.3,380.7,309.3,383L309.3,383z M326.7,380.7
		c0,1.1-0.9,1.8-2.4,1.8h-2.7v-3.6h2.7C325.7,378.9,326.6,379.5,326.7,380.7L326.7,380.7L326.7,380.7z M340.6,385.3l1.7-4.5l1.7,4.5
		H340.6z"/>
                                                <path class="utk-svg-orange" d="M271.2,411.6c0,2.7-2.3,4.3-5.9,4.3h-8v-8.4h7.6C269,407.4,271.1,408.9,271.2,411.6L271.2,411.6
		L271.2,411.6z M264.3,405.1h-7.1v-8.2h7.3c3.4,0,5.3,1.5,5.3,3.9v0.1C269.8,403.6,267.6,405.1,264.3,405.1 M268.8,405.9
		c1.9-0.8,3.8-2.4,3.8-5.5v-0.1c0-1.5-0.6-2.8-1.5-3.8c-1.4-1.3-3.5-2.1-6.2-2.1h-10.2v23.9h10.6c5.2,0,8.7-2.4,8.7-6.5v-0.1
		C273.9,408.4,271.6,406.8,268.8,405.9"/>
                                                <rect x="276.7" y="394.4" class="utk-svg-orange" width="2.7" height="23.9"/>
                                                <path class="utk-svg-orange" d="M293.8,418.7c4,0,7.4-1.7,9.6-3.7v-9.5h-9.9v2.4h7.3v5.9c-1.6,1.3-4.2,2.4-6.9,2.4c-5.8,0-9.5-4.2-9.5-9.9
		v-0.1c0-5.3,3.8-9.8,9.1-9.8c3.4,0,5.4,1.1,7.3,2.7l1.7-2.1c-2.4-2-4.9-3.2-8.9-3.2c-7.2,0-12,5.8-12,12.4v0.1
		C281.7,413.2,286.3,418.7,293.8,418.7"/>
                                                <rect x="306.6" y="394.4" class="utk-svg-orange" width="8" height="23.9"/>
                                                <path class="utk-svg-orange" d="M395.9,402.9c-2.5-0.5-3.2-0.9-3.2-1.5v-0.1c0-0.6,0.6-1,1.7-1c2.2,0,4.9,0.7,7.2,2.4l3.9-5.4
		c-2.8-2.2-6.2-3.3-10.8-3.3c-6.6,0-10.1,3.5-10.1,8.1v0.1c0,5.1,4.7,6.6,10.1,7.7c2.5,0.5,3.3,0.9,3.3,1.6v0.1c0,0.7-0.6,1-2.1,1
		c-2.8,0-5.8-0.8-8.4-2.8l-3,3.6l-7.9-19h-7.9l-8.4,20v-2.5h-12.7v-2.6h11.7v-5.8h-11.7v-2.4h12.6v-6.5h-20.4v9.7
		c-0.8-5.9-5.6-9.7-14.1-9.7h-9.2v23.9h8.9c8.7,0,13.5-4.1,14.4-10.1v10.1h18.9h1.7h6.8l1.2-3.2h8.4l1.3,3.2h8.7l-0.8-1.8
		c2.7,1.5,6,2.2,9.6,2.2c6.4,0,10.6-3.1,10.6-8.1v-0.1C406.1,405.7,402,404,395.9,402.9z M331.8,406.4c0,3.5-2.4,5-6,5h-1.3v-10h1.3
		C329.4,401.4,331.8,402.9,331.8,406.4L331.8,406.4z M370.3,409.4l2.2-5.8l2.2,5.8H370.3z"/>
                                                <path class="utk-svg-orange" d="M395.1,413.6v-0.3c0-0.1,0-0.1,0.1-0.1c0.1,0,0.2,0,0.2,0.2c0,0.1,0,0.1-0.1,0.2
		C395.2,413.6,395.1,413.6,395.1,413.6L395.1,413.6L395.1,413.6z M395.8,414.1C395.7,414.1,395.7,414,395.8,414.1
		c-0.2-0.2-0.3-0.3-0.4-0.5c0.1,0,0.2-0.1,0.2-0.3c0-0.2-0.2-0.3-0.4-0.3h-0.6v0.1c0.1,0,0.1,0,0.1,0.2v0.6c0,0.1,0,0.1-0.2,0.2v0.1
		h0.6v-0.1c-0.1,0-0.2,0-0.2-0.2v-0.2h0c0,0,0.1,0,0.1,0.1c0,0.1,0.1,0.2,0.1,0.3C395.4,414.1,395.5,414.2,395.8,414.1L395.8,414.1z
		 M395.2,412.8c0.5,0,0.8,0.4,0.8,0.8c0,0.5-0.4,0.8-0.8,0.8c-0.5,0-0.8-0.4-0.8-0.8C394.4,413.1,394.7,412.8,395.2,412.8
		 M395.2,412.6c-0.6,0-1,0.5-1,1c0,0.6,0.5,1,1,1c0.6,0,1-0.5,1-1C396.2,413.1,395.8,412.6,395.2,412.6"/>
                                                <path class="utk-svg-white" d="M244.5,391.2h-4.2c-0.1-0.6-0.2-1.1-0.5-1.5c-1.6-3.1-6.2-3.2-8.1-0.3v13.8c0,2.8,1.6,5.3,5.1,5.3v4.2
		h-17.6v-4.2c3.5,0,5.1-2.5,5.1-5.3v-13.8c-1.9-2.8-6.4-2.8-8.1,0.3c-0.2,0.5-0.4,0.9-0.5,1.5h-4.2v-11.3h32.7L244.5,391.2
		L244.5,391.2z"/>
                                            </g>
                                        </svg>
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
                                               value="" className="form-control" title="search" speech=""
                                               x-webkit-speech=""/>
                                    </div>
                                    <input type="hidden" name="qtype" className="searchtext" value="utk"
                                           title="search type"/>
                                    <input name="go" type="submit" aria-label="Search utk.edu" title="Submit"
                                           className="btn btn-primary" value="Search"/>
                                </form>
                            </div>
                            <div className="footer-university--menu">
                                {menuColumns}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
