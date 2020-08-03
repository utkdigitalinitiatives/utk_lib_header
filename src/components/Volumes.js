import React, {Component} from 'react';
import {MenuColumns} from "./MenuColumns";
import {MenuSingle} from "./MenuSingle";
import request from "superagent";

import {Hours} from "./Hours";
// import {Help} from "./Help";
import Globals from "./Globals";
import {Chat} from "./Chat";
// import {Locations} from "./Locations";

const ENDPOINT = 'assets/wp-json/libmenu';
const ROUTE = '/header';

import fall20020 from '../media/fall2020.jpg';
import extra1 from '../media/fall2020-extra1.jpg';
import extra2 from '../media/fall2020-extra2.jpg';


export class Volumes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentWillMount() {
        this.fetchHomepage()
    }

    fetchHomepage() {
        request
            .get('https://volumes.lib.utk.edu/wp-json/volumes/homepage')
            .then((result) => {
                this.setState({
                    data: result.body
                })
            })
    }

    renderFeatured = (item) => {
        return (
            <a className="utk-volumes--feature">
                <div>
                    <strong>{item.homepage_featured_heading}</strong>
                    <em>{item.homepage_featured_subheading}</em>
                    <span>Read More</span>
                </div>
                <img src={item.homepage_featured_image.sizes.card_image} />
            </a>
        )
    }

    renderSecondary = (item) => {
        return (
            <a className="utk-volumes--extras--item">
                <img src={item.homepage_secondary_image.sizes['post-thumbnail']} />
                <span>{item.homepage_secondary_heading}</span>
            </a>
        )
    }

    render() {


        if (this.state.data) {

            let {featured, secondary} = this.state.data

            return (
                <div className="utk-resources-menu--volumes">
                    {this.renderFeatured(featured[0])}

                    <div className="utk-volumes--extras">
                        {this.renderSecondary(secondary[0])}
                        {this.renderSecondary(secondary[1])}
                    </div>
                </div>
            )

        } else {

            return null

        }
    }

}