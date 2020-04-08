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

import tease from '../media/hodges-clock.jpg';

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

    cloneLocationData(data, name, url, contingency) {

        const clone = JSON.parse(JSON.stringify(data))
        const update = {
            'name' : name,
            'url' : url,
            'contingency' : contingency
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
                            <span className="utk-hours-teaser--title">Classes are online and so are we!</span>
                            {/*<span className="utk-hours-teaser--title">The Libraries will continue to serve our patrons online while access to buildings is restricted.</span>*/}
                            <div className="utk-hours-teaser--hours">
                                <dl>
                                    <dt>Monday-Thursday</dt>
                                    <dd>8am–2am</dd>
                                </dl>
                                <dl>
                                    <dt>Friday</dt>
                                    <dd>8am–Midnight</dd>
                                </dl>
                                <dl>
                                    <dt>Saturday</dt>
                                    <dd>10am–Midnight</dd>
                                </dl>
                                <dl>
                                    <dt>Sunday</dt>
                                    <dd>10am–2am</dd>
                                </dl>
                            </div>
                            {/*<div className="utk-hours-teaser--menu">*/}
                            {/*    <a href="https://www.lib.utk.edu/hours/">Locations</a>*/}
                            {/*    <a href="https://www.lib.utk.edu/hours/spaces/">Explore Spaces</a>*/}
                            {/*    <a href="https://www.lib.utk.edu/hours/maps-directions/">Maps & Directions</a>*/}
                            {/*</div>*/}
                            <div className="utk-hours-teaser--menu">
                                <a href="https://www.lib.utk.edu/askusnow">AskUsNow</a>
                                <a href="https://www.lib.utk.edu/askusnow/subject-librarians/">Find a Librarian</a>
                                <a href="https://www.lib.utk.edu/contact/">Feedback</a>
                            </div>
                            {/*<img src={tease} />*/}
                        </div>
                        <span className="utk-hours-teaser--badge">Building access is currently restricted, hours listed indicate digital and remote availability of our public services desks.</span>
                        <div className="utk-hours-header">
                            <h3>{moment.unix(this.state.timestamp).format('MMMM D, YYYY')}</h3>
                            <div className="utk-hours-header--links">
                                <a href="https://www.lib.utk.edu/contingency"
                                   className="utk-resources-toggle--map">More Details</a>
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
                                            locations[217],
                                            locations[224]
                                            // this.cloneLocationData(locations[52], 'The Commons', 'https://commons.utk.edu', true),
                                            // this.cloneLocationData(locations[52], 'Graduate Commons', 'https://lib.utk.edu', true)
                                        ]}
                                    title="Hodges"
                                    slug="hodges"
                                    subtitle="Main Library"
                                    formal="John C. Hodges Library"
                                    thumbnail={hodges}
                                    chat="36f013b9caf90b6da607ee2e49612d6c"
                                    hideChat={this.props.hideChat}
                                    phone="865-974-4351"
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
                                    chat="37e2cd14d82e1d34a6a00df6ac7215a0"
                                    hideChat={this.props.hideChat}
                                    phone="865-974-7338"
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
                                    chat="6356592de428f11b5e8ea54ccdecfc0a"
                                    hideChat={this.props.hideChat}
                                    phone="865-974-3474"
                                />
                                {/*<HoursLocation*/}
                                {/*    url="https://lib.utk.edu/request/storage"*/}
                                {/*    data={locations[227]}*/}
                                {/*    id={227}*/}
                                {/*    title="Hoskins"*/}
                                {/*    slug="hoskins"*/}
                                {/*    subtitle="Storage & Reading Room"*/}
                                {/*    formal="James D. Hoskins Library"*/}
                                {/*    thumbnail={hoskins}*/}
                                {/*    contingency={true}*/}
                                {/*/>*/}
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
