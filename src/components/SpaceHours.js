import React, {Component} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import MomentLocaleUtils, {
    formatDate,
    parseDate,
} from 'react-day-picker/moment';

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

    render() {
        const { selectedDay } = this.state;

        return (
            <React.Fragment>
                <DayPickerInput
                    format={format}
                    value={selectedDay}
                    formatDate={formatDate}
                    parseDate={parseDate}
                    placeholder={`${formatDate(new Date())}`}
                    onDayChange={this.handleDayChange}
                    dayPickerProps={{
                        showOutsideDays: true,
                        selectedDays: selectedDay,
                        todayButton: "Select Today"
                    }}
                />
            </React.Fragment>
        )
    }
}

export default SpaceHours;
