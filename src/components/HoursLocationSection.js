import React, {Component} from 'react';
import Globals from "./Globals";


const ENDPOINT = 'wp-json/libcal';
const ROUTE = '/hours';
const lid = document.getElementById('utk-hours--location--lid').getAttribute('data-lid');

class HoursLocationSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            location: {},
            timestamp: 0,
            grab: false
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
                    location: data.locations[lid],
                    timestamp: data.timestamp,
                    grab: true
                });
            })
            .catch(err => console.error(this.props.url, err.toString()));

        return null

    }

    componentDidMount() {
        this.fetchLibCalHours()
    }

    render() {

        let hoursRangeClass = 'utk-hours--refresh utk-hours--today--range'

        if (this.state.location.open) {
            hoursRangeClass += ' utk-hours--open';
        } else {
            hoursRangeClass += ' utk-hours--closed';
        }

        return (
            <React.Fragment>
                <span className="utk-hours--today--label">
                    Hours Today
                </span>
                <span className={hoursRangeClass}>
                    &nbsp;{this.state.location.hours}
                </span>
            </React.Fragment>
        )
    }
}

export default HoursLocationSection;
