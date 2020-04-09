import React, {Component} from 'react';
import Globals from "./Globals";
import moment from 'moment';

const ENDPOINT = 'wp-json/libcal';
const ROUTE = '/hours';

import MomentLocaleUtils, {
    formatDate,
    parseDate,
    getFirstDayOfWeek,
} from 'react-day-picker/moment';
import {MenuColumns} from "./MenuColumns";

const format = 'dddd, M/D/YYYY';
const session_day = 'utk_lib_day_picker';

class SpaceHoursWeek extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: null,
            data: {}
        };
    }

    buildWeek = (date) => {

        const selected = moment(date);
        const dayOfWeek = selected.weekday();

        let startOfWeek = null;

        if ((dayOfWeek) === 0) {
            startOfWeek = selected;
        } else {
            startOfWeek = selected.subtract(dayOfWeek,'d');
        }

        let days = [];
        let day = startOfWeek.clone();

        let dayCount = 0

        while (dayCount <= 6) {
            days.push(day.toDate());
            day = day.clone().add(1, 'd');
            dayCount = dayCount + 1;
        }

        return days;

    }

    buildFutureWeek = (date) => {

        const selected = moment(date);
        const timeback = moment().subtract(5, 'h').format('d')

        let days = [];
        let day = selected;

        if (timeback !== moment(date).format('d')) {
            day = day.subtract(1, 'd');
        }

        let dayCount = 0

        while (dayCount <= 6) {
            days.push(day.toDate());
            day = day.clone().add(1, 'd');
            dayCount = dayCount + 1;
        }

        return days;

    }

    fetchSpaceHoursByWeek(lid, day) {

        let week = this.buildWeek(day);
        let startOfWeek = moment(week[0]).format('YYYY-MM-DD')

        this.setState({
            week:  week,
            startOfWeek: startOfWeek
        });

        let weekString = '';
        week.map((day, index) => {
            weekString = weekString + moment(day).format('YYYY-MM-DD') + ',';
        });

        let dayID = startOfWeek.replace('-', '');
        dayID = parseInt(dayID.replace('-', ''));

        if (Number.isInteger(dayID) === true) {

            const url = Globals.URL + ENDPOINT + ROUTE + '/' + lid + '/' + weekString.slice(0, -1);
            const sessionHours = 'utk_lib_week_hours_' + lid + '_' + dayID;

            if (sessionStorage.getItem(sessionHours) === null) {

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

    fetchFutureHours(lid, day) {

        let week = this.buildFutureWeek(day);
        let startOfWeek = moment(week[0]).format('YYYY-MM-DD')

        this.setState({
            week:  week,
            startOfWeek: startOfWeek
        });

        let weekString = '';
        week.map((day, index) => {
            weekString = weekString + moment(day).format('YYYY-MM-DD') + ',';
        });

        let dayID = startOfWeek.replace('-', '');
        dayID = parseInt(dayID.replace('-', ''));

        const url = Globals.URL + ENDPOINT + ROUTE + '/' + lid + '/' + weekString.slice(0, -1);

        if (Number.isInteger(dayID) === true) {
            fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {

                    this.setState({
                        future: data
                    });

                })
                .catch(err => console.error(this.props.url, err.toString()));
        }

        return null
    }

    componentDidMount() {
        const {lid, day} = this.props;

        let setDate = day

        if (day === null) {
            setDate = moment().format('YYYY-MM-DD')
        }

        this.fetchSpaceHoursByWeek(lid, setDate);
        this.fetchFutureHours(lid, setDate);

        this.setState({
            date: setDate
        });
    }

    componentWillReceiveProps() {
        const {lid, day} = this.props;

        let setDate = day

        if (day === null) {
            setDate = moment().format('YYYY-MM-DD')
        }

        if (day !== this.state.date) {

            this.fetchSpaceHoursByWeek(lid, setDate);
            this.fetchFutureHours(lid, setDate);

            this.setState({
                date:  setDate
            });
        }
    }

    buildWeekGrid = (dates, futureDates) => {

        let grid = null;

        if (this.props.header === 'daysofweek') {

            if (Array.isArray(dates)) {
                if (dates.length === 7) {
                    grid = dates.map((date, index) => {
                        let classes = ['utk-hours--week--dayofweek'];

                        if (date.date === this.state.date)
                            classes.push('active')

                        return (
                            <div className={classes.join(' ')}>
                                {moment(date.date).format('ddd')}
                                <span>{moment(date.date).format('MMM D')}</span>
                            </div>
                        )
                    });
                }
            }
        } else if (this.props.header === 'future') {

            if (Array.isArray(futureDates)) {
                if (futureDates.length === 7) {
                    grid = futureDates.map((date, index) => {
                        let classes = ['utk-hours--week--hours'];

                        let hoursLabel = this.getHoursLabel(date);

                        if (date.date === this.state.date)
                            classes.push('active')

                        return (
                            <div className="utk-hours--week-future">
                                <div className="utk-hours--week--dayofweek">
                                    {moment(date.date).format('dddd')}, {moment(date.date).format('MMMM D')}
                                </div>
                                <div className="utk-hours--week--hours">{hoursLabel}</div>
                            </div>
                        )
                    });
                }
            }

        } else {

            if (Array.isArray(dates)) {
                if (dates.length === 7) {
                    grid = dates.map((date, index) => {
                        let classes = ['utk-hours--week--hours'];

                        let hoursLabel = this.getHoursLabel(date);

                        if (date.date === this.state.date)
                            classes.push('active')

                        return <div className={classes.join(' ')}>{hoursLabel}</div>;
                    });
                }
            }
        }

        return grid;
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
        const {data, future} = this.state;

        return (
            <div className="utk-hours--week">
                {this.buildWeekGrid(data, future)}
            </div>
        )
    }
}

export default SpaceHoursWeek;
