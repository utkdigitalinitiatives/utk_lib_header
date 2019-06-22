import React, {Component} from 'react';

export class HoursLocationChild extends Component {

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

        const {id, data, title} = this.props;
        const {name, url} = this.props.data;

        let hoursClass = this.getHoursIndicator(data, id);
        let hoursLabel = this.getHoursLabel(data.hours);

        return (
            <li className="utk-hours--listing--item utk-hours--listing--item--child">
                <a href={url} className={hoursClass}>
                    <div className="utk-hours--listing--item--meta">
                        <span className="library-title">{name}</span>
                        <span className="utk-hours--listing--item--hours">{ hoursLabel }</span>
                    </div>
                </a>
            </li>
        )
    }
}
