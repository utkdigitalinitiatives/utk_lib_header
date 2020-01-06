import React, {Component} from 'react';
import {HoursLocation} from "./HoursLocation";
import Globals from "./Globals";

import hodges from '../media/hodges.jpg';
import pendergrass from '../media/pendergrass.jpg';
import devine from '../media/devine.jpg';
import hoskins from '../media/hoskins.jpg';
// import {Locations} from "./Locations";

import MomentLocaleUtils, {
    formatDate,
    parseDate,
} from 'react-day-picker/moment';

import moment from 'moment';

const ENDPOINT = 'wp-json/libcal';
const ROUTE = '/hours';

import tease from '../media/bluesky-gr.jpg';

export class Hours extends Component {

    constructor(props) {
        super(props);

        this.state = {
            locations: {},
            timestamp: 0,
            grab: false,
            layout: 'default'
        };
    }

    fetchLibCalHours() {

        fetch(Globals.URL + ENDPOINT + ROUTE, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    locations: data.locations,
                    timestamp: data.timestamp,
                    grab: true
                });
            })
            .catch(err => console.error(this.props.url, err.toString()));

        return null

    }

    componentDidMount() {

        if (this.props.expanded && !this.state.grab)
            this.fetchLibCalHours()

    }

    componentDidUpdate() {

        if (this.props.expanded && !this.state.grab)
            this.fetchLibCalHours()

    }

    cloneLocationData(data, name, url) {

        const clone = JSON.parse(JSON.stringify(data))
        const update = {
            'name' : name,
            'url' : url
        }

        return Object.assign(clone, update)

    }

    // toggleDefault = () => {
    //     this.setState({layout: 'default'});
    // }
    //
    // toggleMap = () => {
    //     this.setState({layout: 'map'});
    // }

    render() {

        const {locations} = this.state;

        if (Object.keys(locations).length !== 0) {

            // if (this.state.layout === 'default')
            return (
                <React.Fragment>
                    <div className="utk-hours">
                        <div className="utk-hours-teaser">
                            <span className="utk-hours-teaser--title">Find Your Place</span>
                            <div className="utk-hours-teaser--menu">
                                <a href="https://www.lib.utk.edu/hours/locations">Locations</a>
                                <a href="https://www.lib.utk.edu/hours/spaces">Explore Spaces</a>
                                <a href="https://www.lib.utk.edu/hours/maps-directions">Maps & Directions</a>
                            </div>
                            <img src={tease} />
                        </div>
                        <div className="utk-hours-header">
                            <h3>Hours for {moment.unix(this.state.timestamp).format('MMMM D, YYYY')}</h3>
                            <div className="utk-hours-header--links">
                                <a href="https://www.lib.utk.edu/hours/"
                                   className="utk-resources-toggle--map">More Hours</a>
                            </div>
                        </div>
                        <div className="utk-hours--listing">
                            <ul className="utk-hours--listing--col" aria-label="libraries and locations">
                                <HoursLocation
                                    url="https://lib.utk.edu"
                                    data={locations[52]}
                                    id={52}
                                    children={
                                        [
                                            this.cloneLocationData(locations[52], 'The Commons', 'https://commons.utk.edu'),
                                            this.cloneLocationData(locations[52], 'Graduate Commons', 'https://lib.utk.edu'),
                                            locations[217],
                                            locations[224]
                                        ]}
                                    title="Hodges"
                                    slug="hodges"
                                    subtitle="Main Library"
                                    formal="John C. Hodges Library"
                                    thumbnail={hodges}
                                />
                                <HoursLocation
                                    url="https://lib.utk.edu/agvet"
                                    data={locations[225]}
                                    id={225}
                                    title="Pendergrass"
                                    slug="pendergrass"
                                    subtitle="AgVet Library"
                                    formal="Pendergrass Agriculture & Veterinary Medicine Library"
                                    thumbnail={pendergrass}
                                />
                                <HoursLocation
                                    url="https://lib.utk.edu/music"
                                    data={locations[226]}
                                    id={226}
                                    title="DeVine"
                                    slug="devine"
                                    subtitle="Music Library"
                                    formal="George F. DeVine Music Library"
                                    thumbnail={devine}
                                />
                                <HoursLocation
                                    url="https://lib.utk.edu/request/storage"
                                    data={locations[227]}
                                    id={227}
                                    title="Hoskins"
                                    slug="hoskins"
                                    subtitle="Storage & Reading Room"
                                    formal="James D. Hoskins Library"
                                    thumbnail={hoskins}
                                />
                            </ul>
                        </div>
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <div className="utk-hours">
                    <div className="utk-hours-header">
                        <h3>Libraries &amp; Locations</h3>
                    </div>
                    <ul className="utk-hours--listing">
                        <h5 className="utk-hours--loading spinner">Loading today's hours...</h5>
                    </ul>
                </div>
            )
        }
    }
}
