import React, {Component} from 'react';

export class HoursLocation extends Component {

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

    getHoursIndicator = (data) => {

        let indicator = '';

        // checks for null hours
        if (!data.open)
            indicator = 'library-closed';
        else
            indicator = 'library-open';

        return indicator;

    };

    render() {

        const {url, data, label, id} = this.props;

        let hoursClass = this.getHoursIndicator(data, id);
        let hoursLabel = this.getHoursLabel(data.hours);

        return (
            <li className="utk-hours--listing--item">
                <a href={url}className={hoursClass}>
                    <span className="library-label">{label}</span>
                    <span className="utk-hours--listing--item--hours">{ hoursLabel }</span>
                </a>
            </li>
        )
    }
}
