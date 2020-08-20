import React, {Component} from 'react';
import {MenuColumns} from "./MenuColumns";
import {MenuSingle} from "./MenuSingle";
import request from "superagent";

const ENDPOINT = 'assets/wp-json/libmenu';
const ROUTE = '/header';

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
        console.log(item)
        return (
            <a className="utk-volumes--feature"
               href={`https://volumes.lib.utk.edu/?p=${item.homepage_featured_relative_post.ID}`}>
                <div>
                    <strong>{item.homepage_featured_heading}</strong>
                    <em>{item.homepage_featured_subheading}</em>
                    <span>Read More</span>
                </div>
                <img alt={item.homepage_featured_image.sizes.alt}
                     src={item.homepage_featured_image.sizes.card_image} />
            </a>
        )
    }

    renderSecondary = (item) => {
        return (
            <a className="utk-volumes--extras--item"
               href={`https://volumes.lib.utk.edu/?p=${item.homepage_secondary_relative_post.ID}`}>
                <img src={item.homepage_secondary_image.sizes['card_image']} />
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