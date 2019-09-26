import React, {Component} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import MomentLocaleUtils, {
    formatDate,
    parseDate,
} from 'react-day-picker/moment';
import SpaceHoursTime from "./SpaceHoursTime";
import DayPicker from "react-day-picker";

const format = 'dddd, M/D/YYYY';
const session_day = 'utk_lib_day_picker';

class SpaceHours extends Component {

    constructor(props) {
        super(props);

        this.handleDayChange = this.handleDayChange.bind(this);
        this.state = {
            selectedDay: formatDate(JSON.parse(sessionStorage.getItem(session_day)), format),
            isEmpty: true,
            isDisabled: false,
        };
    }

    handleDayChange(selectedDay, modifiers, dayPickerInput) {
        const input = dayPickerInput.getInput();

        sessionStorage.setItem(session_day, JSON.stringify(selectedDay));

        this.setState({
            selectedDay,
            isEmpty: !input.value.trim(),
            isDisabled: modifiers.disabled === true,
        });
    }

    componentDidMount() {
        setInterval(() => {
            if (sessionStorage.getItem(session_day) === null) {
                const today = JSON.stringify(new Date());
                sessionStorage.setItem(session_day, today);
            } else {
                this.setState({
                    selectedDay: formatDate(JSON.parse(sessionStorage.getItem(session_day)), format)
                });
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
                    selectedDays: selectedDay,
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

        console.log(selectedDay);

        return (
            <React.Fragment>
                {this.showPicker(daypicker, selectedDay)}
                {this.spaceHours(hours, lid, message, selectedDay)}
            </React.Fragment>
        )
    }
}

export default SpaceHours;
