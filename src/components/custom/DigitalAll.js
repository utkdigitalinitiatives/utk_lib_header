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
            view: 'grid',
            sortby: 'title',
            data: sortBy(Collections, ['title'])
        };

    }

    toggleView = (e) => {

        let sortID = e.target.id;

        if (sortID === 'view_grid')
            this.setState({view: 'grid'});
        else if (sortID === 'view_list')
            this.setState({view: 'list'});

        return;

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

        let {view, sortby, data} = this.state;

        let viewClass = null

        if (view == 'grid')
            viewClass = 'utk-digital-all-view-grid';
        else if (view == 'list')
            viewClass = 'utk-digital-all-view-list';

        /*
         * if collections exist
         */

        if (data) {

            return (
            <div className={`utk-digital-flex-all ${viewClass}`}>
                {
                    Object.entries(data).map((collection, index) => (
                            <DigitalCollection key={index} dataKey={index} image={collection[1].src} title={collection[1].title} featured={collection[1].featured} />
                        )
                    )
                }
            </div>
            )

        } else {

            return null

        }

    };

    getOptions = (type, state, options) => {

        let active = null;

        return (
            Object.entries(options).map((option) => {

                    if (state === option[1].state)
                        active = "active";
                    else
                        active = null;

                    if (type == 'sort')
                        return <Button id={option[1].id} className={active} onClick={this.toggleSort.bind(this)}>{option[1].title}</Button>
                    else if (type == 'view')
                        return <Button id={option[1].id} className={active} onClick={this.toggleView.bind(this)}>{option[1].title}</Button>

                }
            )
        )

    };

    render () {

        const viewOptions = {
            0: {
                state: 'grid',
                id: 'view_grid',
                title: 'Grid'
            },
            1: {
                state: 'list',
                id: 'view_list',
                title: 'List'
            }
        };

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

        let {view, sortby} = this.state;

        const renderViews = this.getOptions('view', view, viewOptions);
        const renderSorts = this.getOptions('sort', sortby, sortOptions);

        return (
            <section className="utk-digital-all">
                <div className="container">
                    <div className="utk-digital-all-header">
                        <h2>Browse Collections</h2>
                        <div className="utk-digital-all-sort">
                            <span>View</span>
                            <Button.Group color="blue">
                                {renderViews}
                            </Button.Group>
                            <span>Sort By</span>
                            <Button.Group color="blue">
                                {renderSorts}
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