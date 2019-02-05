import React, {Component} from 'react';

export class HoursLocation extends Component {

    constructor(props) {
        super(props);
    }


    /*
     * returns hours, 'Closed' if null.
     */

    getHoursLabel = (hours) => {

        let label = hours;

        if (!hours)
            label = 'Closed';

        return label;

    };


    /*
     * builds indicator dependent on many differing cases
     */

    getHoursIndicator = (data, id) => {

        let indicator = '';

        // checks for null hours
        if (!data.hours)
            indicator = 'library-closed';

        // checks for open state
        if (id != 227)
            indicator = 'library-open';
        else
            indicator = 'library-closed';

        return indicator;

    };

    render() {

        const {data, label, id} = this.props;

        let hoursClass = this.getHoursIndicator(data, id);
        let hoursLabel = this.getHoursLabel(data.hours);

        return (
            <li className="utk-hours--listing--item">
                <a href="#" className={hoursClass}>
                    <h5>{data.name}</h5>
                    <span className="utk-hours--listing--item--hours">{ hoursLabel }</span>
                </a>
            </li>
        )
    }
}