import React, {Component} from 'react';
import {MenuColumns} from "./MenuColumns";
import {MenuSingle} from "./MenuSingle";

export class FooterLibraries extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {drawer, footer} = this.props;

        let menuColumns = Object.entries(drawer).map((columns, index) => {
            return (
                <MenuColumns key={index} items={columns[1]} activeMenu={this.setMenu}/>
            );
        });

        return (
            <section className="utk-footer footer-libraries">
                <div className="container">
                    <div className="footer-libraries--inner">
                        <div className="footer-libraries--anchor">
                            <div className="footer-libraries--identity">
                                <div className="footer-libraries--identity--brand">
                                    <a href="/" className="footer-libraries--identity--brand--unit">University
                                        Libraries</a>
                                </div>
                                <p>
                                    1015 Volunteer Boulevard<br/>
                                    Knoxville, TN 37996<br/>
                                    <a href="tel:865-974-4351"
                                       title="Call The University of Tennessee - 865-974-4351">865-974-4351</a>
                                </p>
                            </div>
                            <div className="footer-libraries--menu-extras">
                                <MenuSingle items={footer} />
                            </div>
                        </div>
                        <div className="footer-libraries--menu">
                            {menuColumns}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
