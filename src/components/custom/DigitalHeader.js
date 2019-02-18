import React, {Component} from 'react';
import {DigitalToolbar} from "./DigitalToolbar";
import {DigitalFeaturedCollection} from "./DigitalFeaturedCollection";

import FeaturedImage from '../../media/featured.jpg';

const backgroundStyle = {
    backgroundImage: `url(${FeaturedImage})`
};

export class DigitalHeader extends Component {

    render() {
        return (
            <section className="utk-digital-header">
                <div className="utk-digital-header-wrap">
                    <div className="container">
                        <div className="utk-digital-header-flex">
                                <div className="utk-digital-header-actions">
                                    <h1>Digital Collections</h1>
                                    <p>Explore items digitized from our collections.</p>
                                    <DigitalToolbar rangeStep={25} rangeMin={1775} rangeMax={2025} />
                                </div>
                                <div className="utk-digital-header-featured">
                                        <DigitalFeaturedCollection/>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="utk-digital-header-background">
                    <div
                        className="utk-digital-header-background-image"
                        style={ backgroundStyle } ></div>
                </div>
            </section>
        )
    }

}