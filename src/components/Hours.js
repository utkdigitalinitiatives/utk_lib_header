import React, {Component} from 'react';
import {HoursLocation} from "./HoursLocation";

export class Hours extends Component {

    constructor(props) {
        super(props);
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