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

    getSortOptions = (sortby, sortOptions) => {

        let active = null;

        return (
            Object.entries(sortOptions).map((sort) => {

                    if (sortby === sort[1].state)
                        active = "active";
                    else
                        active = null;

                    return <Button id={sort[1].id} className={active} onClick={this.toggleSort.bind(this)}>{sort[1].title}</Button>
                }
            )
        )

    };

    render () {

        const sortOptions = {
            0: {
                state: 'title',
                id: 'sort_alpha',
                title: 'A-Z'
            },
            1: {
                state: 'recent',
                id: 'sort_recent',
                title: 'Most Recent'
            },
            2: {
                state: 'count',
                id: 'sort_count',
                title: 'Item Count'
            }
        };

        let {sortby} = this.state;

        const renderOptions = this.getSortOptions(sortby, sortOptions);

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
                                {renderOptions}
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