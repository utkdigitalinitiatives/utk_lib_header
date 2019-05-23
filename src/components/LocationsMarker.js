import React, {Component} from 'react';

export class LocationsMarker extends Component {

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

        const {id, data, url, title, thumbnail, formal} = this.props

        let hoursClass = this.getHoursIndicator(data, id);
        let hoursLabel = this.getHoursLabel(data.hours);

        return (
            <div className="utk-header-map--marker">
                <a href={url} className={hoursClass}>
                    <figure>
                        <img src={thumbnail} alt={formal} />
                    </figure>
                    <div className="utk-header-map--marker--meta">
                        <span className="library-title">{title}</span>
                    </div>
                </a>
            </div>
        )
    }
}
