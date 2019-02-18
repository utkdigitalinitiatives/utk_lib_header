import React, {Component} from 'react';
import {Button, Select, Label, Input, Popup, Grid, Radio } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import debounce from "lodash/debounce";

const collectionOptions = [
    { key: 'all', text: 'All Collections', value: 'all' },
    { key: 'gsmrc', text: 'Great Smoky Mountains Regional Collections', value: 'gsmrc' },
    { key: 'mpa', text: 'Modern Political Archives', value: 'mpa' },
    { key: 'thrc', text: 'Tennessee Historical and Regional Collections', value: 'thrc' },
    { key: 'uac', text: 'University Archives Collections', value: 'uac' }
];

const collectionSubjects = [
    { key: 'all', text: 'All Formats', value: 'all' },
    { key: 'portrait', text: 'Portrait', value: 'portrait' },
    { key: 'lithograph', text: 'Lithograph', value: 'lithograph' },
    { key: 'engraving', text: 'Engraving', value: 'engraving' },
    { key: 'more', text: '...', value: 'more' }
];

export class DigitalToolbar extends Component {

    state = {
        rangeAll: 1,
        rangeValues: [1775, 2025],
        rangeSelectContent: 'Select Dates'
    };

    onChange = (range) => {

        let rangeStart = Math.round(range[0]);
        let rangeEnd = Math.round(range[1]);
        let updatedRange = [rangeStart, rangeEnd];

        this.setState({rangeValues: updatedRange})
        this.updateRangeSelect(updatedRange);

        return

    };

    updateRangeSelect = (range) => {

        let minString = null
        let maxString = null

        const {rangeMin, rangeMax} = this.props;

        if (rangeMin == range[0])
            minString = 'Oldest';
        else
            minString = range[0];

        if (rangeMax == range[1])
            maxString = 'Today';
        else
            maxString = range[1];

        let selectContentString = minString + '-' + maxString;

        this.setState({rangeSelectContent: selectContentString});

        return

    };

    getNotches = (step, min, max) => {

        let notches = [];
        let notchString = null;
        let notchClass = null;
        const num = (max - min ) / step;

        for (let i = 0; i <= num; i++) {

            let notchVal = max - (step * i)

            if (notchVal == min)
                notchString = 'Oldest';
            else if (notchVal == max)
                notchString = 'Today';
            else
                notchString = notchVal;

            if (this.state.rangeValues.includes(notchVal))
                notchClass = 'activeNotch';
           else if (notchVal > this.state.rangeValues[0] && notchVal < this.state.rangeValues[1])
                notchClass = 'in-range';
            else
                notchClass = null;

            notches.push(<span className={notchClass}><em></em>{notchString}</span>)

        }

        return notches

    }

    setActive = (e) => {
        if (e.target.id === 'all')
            this.setState({rangeAll: 1})
        else
            this.setState({rangeAll: 0})

        return
    }

    render () {

        const {rangeStep, rangeMin, rangeMax} = this.props;
        let { rangeAll, rangeValues, rangeSelectContent } = this.state;

        const rangeNotches = this.getNotches(rangeStep, rangeMin, rangeMax);

        let rangeOr = null;
        if (rangeAll)
            rangeOr = "range-or-all";
        else
            rangeOr = "range-or-custom";


        return (
            <div className="utk-digital-bar utk-digital-toolbar">
                <Input
                    type='text'
                    icon='search'
                    iconPosition='left'
                    placeholder='Searching digital.lib.utk.edu'
                    fluid
                    action='Search'
                />
                <Select compact defaultValue="all" options={collectionOptions} />
                <Select compact defaultValue="all" options={collectionSubjects} />
                <Button.Group>
                    <Button id="all" basic={!rangeAll} active={rangeAll} onClick={this.setActive.bind(this)}>All Dates</Button>
                    <Button.Or className={rangeOr} text="" />
                    <Popup trigger={<Button id="range" basic={rangeAll} active={!rangeAll} onClick={this.setActive.bind(this)}>{rangeSelectContent}</Button>} on='click'>
                        <div className="utk-digital-date-slider-notches">
                            {rangeNotches}
                        </div>
                        <Nouislider
                            className="utk-digital-date-slider"
                            accessibility
                            step={rangeStep}
                            orientation="vertical"
                            direction="rtl"
                            range={{ min: rangeMin, max: rangeMax }}
                            start={rangeValues}
                            connect
                            onUpdate={debounce(this.onChange, 50, { 'maxWait': 100 })}
                        />
                    </Popup>
                </Button.Group>


            </div>
        )
    }

}