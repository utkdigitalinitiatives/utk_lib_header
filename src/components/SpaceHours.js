import React, {Component} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import MomentLocaleUtils, {
    formatDate,
    parseDate,
} from 'react-day-picker/moment';
import SpaceHoursTime from "./SpaceHoursTime";

const format = 'dddd, M/D/YYYY';
const session_day = 'utk_lib_day_picker';

class SpaceHours extends Component {

    constructor(props) {
        super(props);

        this.handleDayChange = this.handleDayChange.bind(this);

        let initialDate = formatDate(new Date(), format);

        if (sessionStorage.getItem(session_day) !== null) {
            initialDate = formatDate(JSON.parse(sessionStorage.getItem(session_day)), format);
        }

        this.state = {
            selectedDay: initialDate
        };
    }

    handleDayChange(selectedDay) {

        sessionStorage.setItem(session_day, JSON.stringify(selectedDay));

        this.setState({
            selectedDay: formatDate(selectedDay, format)
        });
    }

    componentDidMount() {
        setInterval(() => {
            if (sessionStorage.getItem(session_day) === null) {
                const today = JSON.stringify(new Date());
                sessionStorage.setItem(session_day, today);
            } else {
                let day = formatDate(JSON.parse(sessionStorage.getItem(session_day)), format);
                if (this.state.day !== day) {
                    this.setState({
                        selectedDay: day
                    });
                }
            }
        }, 180);
    }

    showPicker = (daypicker, selectedDay) => {
        const today = new Date();

        if (daypicker === 'show')
            return <DayPickerInput
                format={format}
                inputProps={{ readOnly: true }}
                value={selectedDay}
                formatDate={formatDate}
                parseDate={parseDate}
                placeholder={`${formatDate(new Date())}`}
                onDayChange={this.handleDayChange}
                dayPickerProps={{
                    disabledDays: { before: today },
                    showOutsideDays: true,
                    enableOutsideDaysClick: true,
                    selectedDays: new Date(selectedDay),
                    todayButton: "Select Today"
                }}
            />
        else
            return null
    };

    spaceHours = (hours, lid, message, selectedDay) => {
        if (hours === 'inherit')
            return <SpaceHoursTime lid={lid} day={formatDate(selectedDay, 'YYYY-MM-DD')} />
        else if (hours === 'message')
            return <div className="utk-space--time utk-space--time-message">{message}</div>
        else
            return null
    };

    render() {
        const { daypicker, hours, lid, message } = this.props;
        const { selectedDay } = this.state;

        return (
            <React.Fragment>
                {this.showPicker(daypicker, selectedDay)}
                {this.spaceHours(hours, lid, message, selectedDay)}
            </React.Fragment>
        )
    }
}

export default SpaceHours;
