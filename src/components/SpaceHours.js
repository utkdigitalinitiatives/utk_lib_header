import React, {Component} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import MomentLocaleUtils, {
    formatDate,
    parseDate,
} from 'react-day-picker/moment';
import SpaceHoursTime from "./SpaceHoursTime";
import SpaceHoursWeek from "./SpaceHoursWeek";

const format = 'dddd, M/D/YYYY';
const session_day = 'utk_lib_day_picker';

const INTERACTIONS = {
    ESC: 27,
    TAB: 9
};

const DIRECTIONS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    TAB: 9
};

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

    handleKeyDown(e) {
        const { keyCode, shiftKey } = e;

        if (
            !shiftKey &&
            (keyCode === INTERACTIONS.TAB || keyCode === DIRECTIONS.DOWN)
        ) {
            setTimeout(() => {
                this.inputInstance.showDayPicker();
            }, 25);
            setTimeout(() => {
                this.pickerInstance.dayPicker.childNodes[0].focus();
            }, 50);
        }

        if (keyCode === INTERACTIONS.ESC) {
            this.hideDayPicker();
        }
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

    hideDayPicker() {
        this.inputInstance.hideDayPicker();
    }

    showPicker = (daypicker, selectedDay) => {
        const today = new Date();

        if (daypicker === 'show')
            return <DayPickerInput
                format={format}
                inputProps={{
                    readOnly: true,
                    onKeyDown: this.handleKeyDown.bind(this)
                }}
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
                    todayButton: "Select Today",
                    ref: ref => {
                        this.pickerInstance = ref;
                    }
                }}
                keepFocus={false}
                ref={ref => {
                    this.inputInstance = ref;
                }}
            />
        else
            return null
    };

    spaceHours = (hours, lid, message, selectedDay, view, header) => {

        if (hours === 'inherit' && view !== "week")
            return <SpaceHoursTime lid={lid} day={formatDate(selectedDay, 'YYYY-MM-DD')} header={header} />
        if (hours === 'inherit' && view === "week")
            return <SpaceHoursWeek lid={lid} day={formatDate(selectedDay, 'YYYY-MM-DD')} header={header} />
        else if (hours === 'message')
            return <div className="utk-space--time utk-space--time-message">{message}</div>
        else
            return null
    };

    render() {
        const { daypicker, hours, lid, message, view, header } = this.props;
        const { selectedDay } = this.state;

        return (
            <React.Fragment>
                {this.showPicker(daypicker, selectedDay)}
                {this.spaceHours(hours, lid, message, selectedDay, view, header)}
            </React.Fragment>
        )
    }
}

export default SpaceHours;
