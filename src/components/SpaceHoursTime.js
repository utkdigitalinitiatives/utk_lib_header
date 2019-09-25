import React, {Component} from 'react';
import Globals from "./Globals";

const ENDPOINT = 'wp-json/libcal';
const ROUTE = '/hours';

class SpaceHoursTime extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {},
            grab: false
        };
    }

    fetchSpaceHours(lid, day) {

        let dayID = day.replace('-', '');
        dayID = parseInt(dayID.replace('-', ''));

        console.log(dayID);

        if (Number.isInteger(dayID) === true) {

            const url = Globals.URL + ENDPOINT + ROUTE + '/' + lid + '/' + day;
            const sessionHours = 'utk_lib_day_hours_' + lid + '_' + dayID;

            if (sessionStorage.getItem(sessionHours) === null) {

                this.setState({
                    grab: true
                });

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
                            data:  store
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
        this.fetchSpaceHours(lid, day)
    }

    componentWillReceiveProps() {
        const {lid, day} = this.props;
        this.fetchSpaceHours(lid, day)
    }

    render() {
        return (
            <React.Fragment>
                <div className="utk-space--time">
                    {/*<span className="utk-space--time--indicator"></span>*/}
                    <span className="utk-space--time--span">{this.state.data.rendered}</span>
                </div>
            </React.Fragment>
        )
    }
}

export default SpaceHoursTime;
