import React, {Component} from 'react';

export class HoursLocation extends Component {

    constructor(props) {
        super(props);
    }
    render() {

        return (
            <li className="utk-hours--listing--item">
                <a href="#" className="library-open">
                    <h5>John C. Hodges Library</h5>
                    <span className="utk-hours--listing--item--hours">24 Hours</span>
                </a>
            </li>
        )
    }
}