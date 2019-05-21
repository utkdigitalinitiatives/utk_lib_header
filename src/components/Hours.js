import React, {Component} from 'react';
import {HoursLocation} from "./HoursLocation";
import Globals from "./Globals";

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

    render() {

        const {locations} = this.state;

        if (Object.keys(locations).length !== 0)
            return (
                <div className="utk-hours">
                    <h4>Libraries &amp; Locations</h4>
                    <ul className="utk-hours--listing">
                        <HoursLocation
                            url="https://lib.utk.edu"
                            data={locations[52]}
                            id={52}
                            label="John C. Hodges Library"/>
                        <HoursLocation
                            url="https://lib.utk.edu/agvet"
                            data={locations[225]}
                            id={225}
                            label="Pendergrass Agriculture & Veterinary Medicine Library"/>
                        <HoursLocation
                            url="https://lib.utk.edu/music"
                            data={locations[226]}
                            id={226}
                            label="George F. DeVine Music Library"/>
                        <HoursLocation
                            url="https://lib.utk.edu/request/storage"
                            data={locations[227]}
                            id={227}
                            label="Hoskins Storage & Reading Room"/>
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
