import React, {Component} from 'react';
import {DigitalToolbar} from "./DigitalToolbar";
import {DigitalCollection} from "./DigitalCollection";
import { Button } from 'semantic-ui-react'

import Collections from "./data/Collections";
import FeaturedImage from '../../media/featured.jpg';
import sortBy from "lodash/sortBy";

export class DigitalAll extends Component {


    constructor(props) {

        super(props);

        this.state = {
            sortby: 'title',
            data: sortBy(Collections, ['title'])
        };

    }

    toggleSort = (e) => {

        let sortID = e.target.id;

        if (sortID === 'sort_alpha') {
            this.setState({sortby: 'title'});
            this.setState({data: sortBy(Collections, ['title'])});
        } else if (sortID === 'sort_recent') {
            this.setState({sortby: 'recent'});
            this.setState({data: Collections});
        } else if (sortID === 'sort_count') {
            this.setState({sortby: 'count'});
            this.setState({data: Collections});
        }

        return;

    }

    buildCollections = () => {

        let {sortby, data} = this.state;

        /*
         * if collections exist
         */

        if (data) {

            return (
            <div className="utk-digital-flex-all">
                {
                    Object.entries(data).map(collection => (
                            <DigitalCollection image={collection[1].src} title={collection[1].title} />
                        )
                    )
                }
            </div>
            )

        } else {

            return null

        }

    };

    render () {
        return (
            <section className="utk-digital-all">
                <div className="container">
                    <div className="utk-digital-all-header">
                        <h2>Browse Collections</h2>
                        <div className="utk-digital-all-sort">
                            <span>View</span>
                            <Button.Group color="blue">
                                <Button active>Grid</Button>
                                <Button>List</Button>
                            </Button.Group>
                            <span>Sort By</span>
                            <Button.Group color="blue">
                                <Button id="sort_alpha" onClick={this.toggleSort.bind(this)} active>A-Z</Button>
                                <Button id="sort_recent" onClick={this.toggleSort.bind(this)}>Most Recent</Button>
                                <Button id="sort_count" onClick={this.toggleSort.bind(this)}>Item Count</Button>
                            </Button.Group>
                        </div>
                    </div>
                    <div className="utk-digital-all-collections">
                    {this.buildCollections(Collections)}
                    </div>
                </div>
            </section>
        )
    }

}