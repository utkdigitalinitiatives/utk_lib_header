import React, {Component} from 'react';
import Globals from "./Globals";

const ENDPOINT = 'wp-json/libcal';
const ROUTE = '/hours';

class SpaceHoursTime extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: null,
            data: {}
        };
    }

    fetchSpaceHours(lid, day) {

        let dayID = day.replace('-', '');
        dayID = parseInt(dayID.replace('-', ''));

        if (Number.isInteger(dayID) === true) {

            const url = Globals.URL + ENDPOINT + ROUTE + '/' + lid + '/' + day;
            const sessionHours = 'utk_lib_day_hours_' + lid + '_' + dayID;

            if (sessionStorage.getItem(sessionHours) === null) {

                console.log(sessionHours);

                fetch(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                    .then(response => response.json())
                    .then(data => {

                        sessionStorage.setItem(sessionHours, JSON.stringify(data));

                        this.setState({
                            data:  data
                        });

                    })
                    .catch(err => console.error(this.props.url, err.toString()));

            } else {

                const grabHours = sessionStorage.getItem(sessionHours);

                this.setState({
                    data: JSON.parse(grabHours)
                });

            }
        }

        return null
    }

    componentDidMount() {
        const {lid, day} = this.props;

        this.fetchSpaceHours(lid, day);

        this.setState({
            date:  day
        });
    }

    componentWillReceiveProps() {
        const {lid, day} = this.props;

        if (day !== this.state.date) {

            this.fetchSpaceHours(lid, day);

            this.setState({
                date:  day
            });
        }
    }

    /*
     * returns hours, 'Closed' if null.
     */

    getHoursLabel = (data) => {

        let label = ''

        if (data.hours) {
            if (!data.hours)
                label = 'Closed';
            else if (data.hours.from === null && data.hours !== '24 Hours')
                label = 'Closed';
            else if (data.hours === '24 Hours')
                label = data.hours;
            else if (data.hours[0].to === '11:59pm')
                label = 'Opens at ' + data.hours[0].from
            else if (data.hours[0].from === '12am')
                label = 'Closes at ' + data.hours[0].to
            else
                label = data.hours[0].from + ' - ' + data.hours[0].to
        } else {
            label = data.rendered
        }

        return label;
    };

    render() {
        return (
            <React.Fragment>
                <div className="utk-space--time">
                    {/*<span className="utk-space--time--indicator"></span>*/}
                    <span className="utk-space--time--span">{this.getHoursLabel(this.state.data)}</span>
                </div>
            </React.Fragment>
        )
    }
}

export default SpaceHoursTime;
