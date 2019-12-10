import React, {Component} from 'react';
import {HoursLocationChild} from "./HoursLocationChild";
import {HoursLocationSpaces} from "./HoursLocationSpaces";

export class HoursLocation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showChildren: false
        };
    };

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

    renderChildTrigger(children, title, showChildren) {
        if (children) {
            if (!showChildren)
                return <a className="utk-hours--listing--item--more" onClick={this.toggleChildren}><span
                    className="icon-plus">{children.length}</span> Show More at Hodges</a>
            else
                return <a className="utk-hours--listing--item--more utk-hours--listing--item--more-collapse"
                          onClick={this.toggleChildren}><span className="icon-minus"></span> Hide All at Hodges</a>
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
            return <ul className="utk-hours--listing--item--childmenu"
                       aria-label={`locations within ${title}`}>{this.mapChildren(children)}</ul>
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

    websiteLink = (url, slug) => {
        if (slug !== 'hodges')
            return <a href={url}>Website</a>
    }

    render() {

        const {id, url, data, title, slug, subtitle, formal, children, thumbnail} = this.props;

        let {showChildren} = this.state
        let hoursChildClass = ''
        let hoursClass = this.getHoursIndicator(data, id);
        let hoursLabel = this.getHoursLabel(data);
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
                        <img src={thumbnail} alt={formal}/>
                    </figure>
                </a>
                <div className="utk-hours--listing--item--meta">
                    <a href={url} className={hoursClass}>
                        <span className="library-title">{title}</span>
                        <span className="library-subtitle">{subtitle}</span>
                        <span className="utk-hours--listing--item--hours">
                                {hoursLabel}
                            </span>
                    </a>
                    <div className="utk-hours--listing--item--meta--links">
                        <HoursLocationSpaces location={slug} />
                        {/*<span>*/}
                            {/*<a href="#">Find on Map</a>*/}
                            {/*{this.websiteLink(url, slug)}*/}
                        {/*</span>*/}
                    </div>
                </div>
                {this.getChildren(children, title)}
                {this.renderChildTrigger(children, title, showChildren)}
            </li>
        )
    }
}
