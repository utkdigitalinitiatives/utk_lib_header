import React, {Component} from 'react';
import {MenuColumns} from "./MenuColumns";
import TagManager from "react-gtm-module";

export class FooterUniversity extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        };
    }

    handleInputChange = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    };

    render() {

        const {university} = this.props;

        let menuColumns = Object.entries(university).map((columns, index) => {
            return (
                <MenuColumns key={index}
                             items={columns[1]}
                             activeMenu={this.setMenu}
                             noTitle={true}/>
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
                                        <svg version="1.1"
                                             id="logo_anniversary"
                                             xmlns="http://www.w3.org/2000/svg"
                                             x="0px" y="0px"
                                             viewBox="0 0 172.1 34.6">
                                            <polygon className="utk-svg-orange"
                                                     points="42.6,9.4 42.6,0.2 44.6,0.2 44.6,7.4 49.2,7.4 49.2,9.4 "></polygon>
                                            <rect x="50.9" y="0.2" className="utk-svg-orange" width="2" height="9.2"></rect>
                                            <path className="utk-svg-orange" d="M59.5,9.5c-2.9,0-4.8-2-4.8-4.7l0,0c0-2.6,2-4.7,4.8-4.8c1.6,0,2.6,0.4,3.6,1.2l-1.2,1.5
	c-0.7-0.6-1.4-0.8-2.4-0.8c-1.5,0-2.6,1.4-2.6,2.9l0,0c0,1.7,1.1,2.9,2.9,2.9c0.7,0,1.4-0.3,1.8-0.6V5.6h-2V3.9h4v4
	C62.4,8.8,61.1,9.5,59.5,9.5z"></path>
                                            <polygon className="utk-svg-orange" points="70.9,9.4 70.9,5.7 67.2,5.7 67.2,9.4 65.2,9.4 65.2,0.2 67.2,0.2 67.2,3.8 70.9,3.8 70.9,0.2 72.9,0.2
	72.9,9.4 "></polygon>
                                            <polygon className="utk-svg-orange" points="126,9.4 126,5.7 122.3,5.7 122.3,9.4 120.3,9.4 120.3,0.2 122.3,0.2 122.3,3.8 126,3.8 126,0.2
	128,0.2 128,9.4 "></polygon>
                                            <polygon className="utk-svg-orange"
                                                     points="78.9,9.4 76.9,9.4 76.9,2 74,2 74,0.2 81.7,0.2 81.7,2 78.8,2 "></polygon>
                                            <polygon className="utk-svg-orange"
                                                     points="116,9.4 114.1,9.4 114.1,2 111.2,2 111.2,0.2 118.8,0.2 118.8,2 115.9,2 "></polygon>
                                            <rect x="83.4" y="0.2" className="utk-svg-orange" width="2" height="9.2"></rect>
                                            <polygon className="utk-svg-orange"
                                                     points="94.3,9.4 89.8,3.5 89.8,9.4 87.7,9.4 87.7,0.2 89.7,0.2 94,5.8 94,0.2 96,0.2 96,9.4 "></polygon>
                                            <path className="utk-svg-orange" d="M102.4,9.4c-2.8,0-4.8-1.9-4.8-4.6l0,0c0-2.6,1.9-4.6,4.8-4.8c1.6,0,2.6,0.4,3.6,1.2l-1.2,1.5
	c-0.7-0.6-1.3-0.8-2.5-0.8c-1.5,0-2.6,1.3-2.6,2.8l0,0c0,1.7,1.1,2.8,2.8,2.8c0.7,0,1.3-0.3,1.8-0.6V5.5h-1.9V3.8h4v4
	C105.4,8.7,104.1,9.4,102.4,9.4z"></path>
                                            <polygon className="utk-svg-orange" points="149.8,9.4 147.6,3.5 145.7,9.4 143.9,9.4 140.6,0.2 142.7,0.2 144.8,6.4 146.9,0.2 148.5,0.2
	150.5,6.3 152.5,0.2 154.6,0.2 151.5,9.4 "></polygon>
                                            <polygon className="utk-svg-orange"
                                                     points="168.6,9.3 166.6,9.3 166.6,5.8 162.9,0.2 165.3,0.2 167.4,4 169.7,0.2 172,0.2 168.6,5.8 "></polygon>
                                            <path className="utk-svg-orange"
                                                  d="M159.7,0.2h-1.8L154,9.4h2.1l0.8-2h3.9l0.8,2.1h2L159.7,0.2z M157.8,5.6l1.2-2.9l1.2,2.9H157.8z"></path>
                                            <path className="utk-svg-orange" d="M52.4,34h-10v-3.8l6.3-5.2c0.9-0.9,1.4-1.5,1.4-2.3c0-1.4-1-2.5-2.5-2.5c-1.4,0-2.5,1-2.5,2.5h-2.9
	c0-2.9,2.5-5.4,5.4-5.4s5.4,2.5,5.4,5.4c0,2-1.4,3.5-2.5,4.4l0,0l-4.9,4.1H53L52.4,34z"></path>
                                            <path className="utk-svg-orange" d="M64.5,34h-9.9v-3.8l6.3-5.2c0.9-0.9,1.4-1.5,1.4-2.3c0-1.4-1-2.5-2.5-2.5c-1.4,0-2.5,1-2.5,2.5h-2.9
	c0-2.9,2.5-5.4,5.4-5.4s5.4,2.5,5.4,5.4c0,2-1.4,3.5-2.5,4.4l0,0l-4.9,4.1h7.4L64.5,34z"></path>
                                            <path className="utk-svg-orange" d="M72.5,34.6c-3.5,0-6.3-2.9-6.3-6.3c0-0.6,0-0.9,0.2-1.5h3.1l0,0c-0.3,0.5-0.3,0.9-0.3,1.5
	c0,1.9,1.7,3.5,3.5,3.5s3.5-1.7,3.5-3.5c0-2-1.5-3.5-3.5-3.5h-5.8l2-6.8H76l0.9,2.9h-5.8l-0.3,0.9h1.7c1.7,0,3.5,0.7,4.6,1.9
	c1,1.2,1.7,2.7,1.7,4.4C78.9,31.8,76,34.6,72.5,34.6z"></path>
                                            <polygon className="utk-svg-orange"
                                                     points="94.7,27.7 94.7,34.2 91.2,34.2 91.2,27.9 85,18 89.1,18 93,24.5 97,18 101,18 "></polygon>
                                            <polygon className="utk-svg-orange" points="115.5,34.2 103.1,34.2 103.1,18 115.4,18 115.4,21.2 106.6,21.2 106.6,24.5 114.3,24.5 114.3,27.7
	106.6,27.7 106.6,31.1 115.4,31.1 115.4,34.2 "></polygon>
                                            <polygon className="utk-svg-orange" points="136.7,9.4 129.6,9.4 129.6,0.2 136.6,0.2 136.6,2 131.6,2 131.6,3.9 135.9,3.9 135.9,5.7 131.6,5.7
	131.6,7.6 136.6,7.6 136.6,9.4 "></polygon>
                                            <path className="utk-svg-orange" d="M150.8,28.4c2.1-0.8,3.5-2.4,3.5-5.1c0-1.6-0.6-2.8-1.4-3.7c-1.1-1.1-2.7-1.7-4.8-1.7h-7.4v16.2h3.5V29h2.8
	l3.5,5.2h4.1L150.8,28.4z M148,25.8h-3.7v-4.6h3.5c1.7,0,2.8,0.8,2.8,2.4C150.6,24.9,149.7,25.8,148,25.8z"></path>
                                            <path className="utk-svg-orange" d="M171.5,29.4c0,3.2-2.4,5.1-5.9,5.1c-2.4,0-5-0.8-6.9-2.5l2.1-2.5c1.4,1.3,2.9,2,4.8,2c1.4,0,2.4-0.6,2.4-1.6
	l0,0c0-0.8-0.6-1.4-3.2-2.1c-3.2-0.8-5.3-1.7-5.3-5l0,0c0-2.9,2.4-5,5.7-5c2.4,0,4.3,0.7,6.1,2.1l-1.8,2.7c-1.4-0.9-2.8-1.6-4.1-1.6
	s-2.1,0.6-2.1,1.4l0,0c0,1.1,0.7,1.4,3.5,2.1C169.7,25.3,171.5,26.6,171.5,29.4L171.5,29.4z"></path>
                                            <path className="utk-svg-orange" d="M128.8,17.8h-3.2l-6.9,16.4h3.7l1.4-3.7h6.9l1.6,3.7h3.5L128.8,17.8z M125.1,27.4l2.3-5.2l2.1,5.2
	C129.5,27.4,125.1,27.4,125.1,27.4z"></path>
                                            <rect className="utk-svg-white"  x="3" y="3" width="28" height="28"></rect>
                                            <path className="utk-svg-orange" d="M0,0.2V34h33.8V0.2H0z M29.5,13h-3.2c0-1.6-1.6-2.8-3.5-2.8c-1.4,0-2.6,0.7-3.2,1.7v10.7c0,2.3,1.8,4.1,3.9,4.1
	l0,0v3.2H10.1v-3.2l0,0c2.2,0,3.9-1.8,3.9-4.1V11.8c-0.5-1-1.8-1.7-3.2-1.7c-1.9,0-3.5,1.3-3.5,2.8h-3V4.5h25.3L29.5,13L29.5,13z"></path>
                                            <rect x="42.6" y="13.1" className="utk-svg-orange" width="129.5" height="1"></rect>
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
                                        <input type="text"
                                               name="qt"
                                               placeholder="Search utk.edu"
                                               value={this.state.searchValue}
                                               onChange={e => this.handleInputChange(e)}
                                               className="form-control"
                                               title="search"
                                               speech=""
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
