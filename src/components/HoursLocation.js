import React, {Component} from 'react';
import {MenuColumns} from "./MenuColumns";
import {MenuSecondary} from "./MenuSecondary";
import {HoursLocationChild} from "./HoursLocationChild";

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

    renderChildTrigger(children, title) {
        if (children) {
            return <a className="utk-hours--listing--item--more"><span className="icon-plus"></span>More at {title}</a>
        } else {
            return null
        }
    }

    getChildren(children) {
        if (children) {
            return children.map((item, index) => {
                return <HoursLocationChild key={index} data={item}/>
            })
        } else {
            return null
        }
    }

    render() {

        const {id, url, data, title, subtitle, formal, children, thumbnail} = this.props;

        let hoursClass = this.getHoursIndicator(data, id);
        let hoursLabel = this.getHoursLabel(data.hours);

        return (
            <li className="utk-hours--listing--item">
                <a href={url} className={hoursClass}>
                    <figure>
                        <img src={thumbnail} alt={formal} />
                    </figure>
                    <div className="utk-hours--listing--item--meta">
                        <span className="library-title">{title}</span>
                        <span className="library-subtitle">{subtitle}</span>
                        <span className="utk-hours--listing--item--hours">{ hoursLabel }</span>
                    </div>
                </a>
                {this.renderChildTrigger(children, title)}
                {this.getChildren(children)}
            </li>
        )
    }
}
