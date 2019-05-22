import React, {Component} from 'react';
import {HoursLocation} from "./HoursLocation";
import Globals from "./Globals";

import hodges from '../media/hodges.jpg';
import pendergrass from '../media/pendergrass.jpg';
import devine from '../media/devine.jpg';
import hoskins from '../media/hoskins.jpg';

const ENDPOINT = 'wp-json/libcal';
const ROUTE = '/hours';

export class Hours extends Component {

    constructor(props) {
        super(props);

        this.state = {
            locations: {},
            timestamp: 0,
            grab: false
        };
    }

    fetchLibCalHours () {

        fetch(Globals.URL + ENDPOINT + ROUTE, {
            headers : {
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

    componentDidUpdate() {

        if (this.props.expanded && !this.state.grab)
            this.fetchLibCalHours()

    }

    theCommons = (hodges) => {
        let commons = hodges
        commons.name = 'The Commons'
        commons.url = 'https://commons.utk.edu/'
        return(commons)
    }

    render() {

        const {locations} = this.state;

        if (Object.keys(locations).length !== 0)
            return (
                <div className="utk-hours">
                    <h3>Libraries &amp; Locations</h3>
                    <ul className="utk-hours--listing">
                        <div className="utk-hours--listing--col">
                            <HoursLocation
                                url="https://lib.utk.edu"
                                data={locations[52]}
                                id={52}
                                children={[this.theCommons(locations[52]),locations[217],locations[224]]}
                                title="Hodges"
                                subtitle="Main Library"
                                formal="John C. Hodges Library"
                                thumbnail={hodges}
                            />
                            </div>
                        <div className="utk-hours--listing-col">
                            <HoursLocation
                                url="https://lib.utk.edu/agvet"
                                data={locations[225]}
                                id={225}
                                title="Pendergrass"
                                subtitle="AgVet Library"
                                formal="Pendergrass Agriculture & Veterinary Medicine Library"
                                thumbnail={pendergrass}
                            />
                            <HoursLocation
                                url="https://lib.utk.edu/music"
                                data={locations[226]}
                                id={226}
                                title="DeVine"
                                subtitle="Music Library"
                                formal="George F. DeVine Music Library"
                                thumbnail={devine}
                            />
                            <HoursLocation
                                url="https://lib.utk.edu/request/storage"
                                data={locations[227]}
                                id={227}
                                title="Hoskins"
                                subtitle="Storage & Reading Room"
                                formal="James D. Hoskins Library"
                                thumbnail={hoskins}
                            />
                        </div>
                    </ul>
                </div>
            );

        else
            return (
                <div className="utk-hours">
                    <h4>Libraries &amp; Locations</h4>
                    <ul className="utk-hours--listing">
                        <h5 className="utk-hours--loading spinner">Loading...</h5>
                    </ul>
                </div>
            )
    }
}
