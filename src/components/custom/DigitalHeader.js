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
                                <DigitalToolbar/>
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