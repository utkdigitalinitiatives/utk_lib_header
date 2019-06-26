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

    getChildren(children) {
        if (children) {
            return children.map((item, index) => {
                return <HoursLocationChild key={index} data={item}/>
            })
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

        if (showChildren === true)
            hoursChildClass = 'utk-hours--listing--item-showchildren'

        return (
            <li className={`utk-hours--listing--item ${hoursChildClass}`}>
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
                {this.getChildren(children)}
                {this.renderChildTrigger(children, title, showChildren)}
            </li>
        )
    }
}
