import React, {Component} from 'react';

export class HoursLocationChild extends Component {

    /*
     * returns hours, 'Closed' if null.
     */

    getHoursLabel = (hours) => {

        let label = hours.hours_open + ' - ' + hours.hours_close;

        if (!hours.hours)
            label = 'Closed';
        else if (hours.hours_open === null && hours.hours !== '24 Hours')
            label = 'Closed';
        else if (hours.hours === '24 Hours')
            label = hours.hours;


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

        // apply human sensibility to affix 24 hour open status
        if (data.hours_open === '12am' && data.hours_close == '12am')
            indicator = 'library-open';

        return indicator;

    };

    render() {

        const {data} = this.props;
        const {name, url} = this.props.data;

        let hoursClass = this.getHoursIndicator(data);
        let hoursLabel = this.getHoursLabel(data);

        let subtitle = null

        if (data.name === 'The Commons')
            subtitle = 'Hodges 2nd Floor'
        else if (data.name === 'The Studio')
            subtitle = 'Hodges 235'
        else if (data.name === 'Special Collections')
            subtitle = 'Hodges 121'

        if (data.hours_close === '11:59pm') {
            hoursLabel = 'Opens at ' + data.hours_open
        }

        if (data.hours_open === '12am') {
            hoursLabel = 'Closes at ' + data.hours_close
        }

        return (
            <li className="utk-hours--listing--item utk-hours--listing--item--child">
                <a href={url} className={hoursClass}>
                    <div className="utk-hours--listing--item--meta">
                        <span className="library-title">{name}</span>
                        <span className="library-subtitle">{subtitle}</span>
                        <span className="utk-hours--listing--item--hours">{ hoursLabel }</span>
                    </div>
                </a>
            </li>
        )
    }
}
