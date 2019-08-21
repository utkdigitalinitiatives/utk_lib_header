import React, {Component} from 'react';
import {HoursLocationChild} from "./HoursLocationChild";

export class HoursLocation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showChildren : false
        };
    };

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

    renderChildTrigger(children, title, showChildren) {
        if (children) {
            if (!showChildren)
                return <a className="utk-hours--listing--item--more" onClick={this.toggleChildren}><span className="icon-plus">{children.length}</span> Show More at Hodges</a>
            else
                return <a className="utk-hours--listing--item--more utk-hours--listing--item--more-collapse" onClick={this.toggleChildren}><span className="icon-minus"></span> Hide All at Hodges</a>
        } else {
            return null
        }
    }

    mapChildren(children) {
        return children.map((item, index) => {
            return <HoursLocationChild key={index} data={item}/>
        })
    }

    getChildren(children, title) {
        if (children) {
            return <ul className="utk-hours--listing--item--childmenu" aria-label={`locations within ${title}`}>{this.mapChildren(children)}</ul>
        } else {
            return null
        }
    }

    toggleChildren = () => {
        let {showChildren} = this.state

        if (showChildren === true)
            this.setState({showChildren: false})
        else
            this.setState({showChildren: true})
    }

    render() {

        const {id, url, data, title, subtitle, formal, children, thumbnail} = this.props;

        let {showChildren} = this.state
        let hoursChildClass = ''
        let hoursClass = this.getHoursIndicator(data, id);
        let hoursLabel = this.getHoursLabel(data.hours);
        let specialCase = null

        if (showChildren === true)
            hoursChildClass = 'utk-hours--listing--item-showchildren'

        if (data.hours_close === '11:59pm') {
            hoursLabel = 'Opens at ' + data.hours_open
        }

        if (data.hours_open === '12am') {
            hoursLabel = 'Closes at ' + data.hours_close
        }

        return (
            <li className={`utk-hours--listing--item ${hoursChildClass}`}>
                <a href={url} className={hoursClass}>
                    <figure>
                        <img src={thumbnail} alt={formal} />
                    </figure>
                    <div className="utk-hours--listing--item--meta">
                        <span className="library-title">{title}</span>
                        <span className="library-subtitle">{subtitle}</span>
                        <span className="utk-hours--listing--item--hours">
                            { hoursLabel }
                        </span>
                    </div>
                </a>
                {this.getChildren(children, title)}
                {this.renderChildTrigger(children, title, showChildren)}
            </li>
        )
    }
}
