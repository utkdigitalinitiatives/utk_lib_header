import React, {Component} from 'react';
import {HoursLocation} from "./HoursLocation";
import Globals from "./Globals";

const ENDPOINT = 'wp-json/libcal';
const ROUTE = '/hours';

export class Hours extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch(Globals.URL + ENDPOINT + ROUTE, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.error(this.props.url, err.toString()));

        return null
    }

    render() {
        return (
            <div className="utk-hours">
                <h4>Hours Today</h4>
                <ul className="utk-hours--listing">
                    <HoursLocation/>
                </ul>
            </div>
        )
    }
}