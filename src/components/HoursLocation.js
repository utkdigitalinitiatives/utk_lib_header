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

        if (hours.hours === 'By Appointment')
            label = 'By Appointment';
        else if (!hours.hours)
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

        console.log(data)

        // checks for null hours
        if (!data.open && data.hours !== 'By Appointment')
            indicator = 'library-closed';
        else if (data.hours === 'By Appointment')
            indicator = 'library-appointment';
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

    renderAlt = (status, id, data, title) => {

        if (status) {

            let hoursClass = this.getHoursIndicator(data, id);
            let hoursLabel = this.getHoursLabel(data);

            if (data.hours_close === '11:59pm') {
                hoursLabel = 'Opens at ' + data.hours_open
            }

            if (data.hours_open === '12am') {
                hoursLabel = 'Closes at ' + data.hours_close
            }

            return (
                <div className={hoursClass}>
                    <span className="library-location">{title}</span>
                    <span className="utk-hours--listing--item--hours">
                        {hoursLabel}
                    </span>
                </div>
            )

        }

    }

    render() {

        const {id, url, data, title, mainLabel, alt, altID, altData, altTitle, slug, subtitle, formal, children, thumbnail, chat, hideChat, phone, contingency} = this.props;

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
                    <a href={url}>
                        <div className="utk-hours--listing--item--title">
                            <span className="library-title">{title}</span>
                            <span className="library-subtitle">{subtitle}</span>
                        </div>
                        <div className="utk-hours--listing--item--locations">
                            <div className={hoursClass}>
                                <span className="library-location">{mainLabel}</span>
                                <span className="utk-hours--listing--item--hours">
                                    {hoursLabel}
                                </span>
                            </div>
                            {this.renderAlt(alt, altID, altData, altTitle)}
                            {this.getChildren(children, title)}
                        </div>
                    </a>
                    {/*<div className="utk-hours--listing--item--meta--links">*/}
                        {/*<HoursLocationSpaces hideChat={hideChat} location={slug} chat={chat} phone={phone} />*/}
                    {/*</div>*/}
                </div>
                {this.renderChildTrigger(children, title, showChildren)}
            </li>
        )
    }
}
