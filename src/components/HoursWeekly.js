import React, {Component} from 'react';
import Globals from "./Globals";
import {formatDate} from "react-day-picker/moment";
import SpaceHoursWeek from "./SpaceHoursWeek";

const ENDPOINT = 'wp-json/libcal';
const ROUTE = '/hours';

export class HoursWeekly extends Component {

    constructor(props) {
        super(props);
    };

    fetchLibCalWeeklyHours() {

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
            this.fetchLibCalWeeklyHours()

    }

    componentDidUpdate() {

        if (this.props.expanded && !this.state.grab)
            this.fetchLibCalWeeklyHours()

    }

    render() {

        return (
            <div className="utk-hours-teaser--hours">
                <div className="utk-hours-teaser--hours--weekly">
                    <SpaceHoursWeek lid="52" day={null} header="future" />
                </div>
            </div>
        )
    }
}
