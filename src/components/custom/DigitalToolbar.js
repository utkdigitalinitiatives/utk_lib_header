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
        rangeValues: [1800, 2025],
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

        let selectContentString = range[0] + '-' + range[1];
        this.setState({rangeSelectContent: selectContentString});

        return

    };

    setActive = (e) => {
        if (e.target.id === 'all')
            this.setState({rangeAll: 1})
        else
            this.setState({rangeAll: 0})
    }

    render () {

        let { rangeAll, rangeValues, rangeSelectContent } = this.state;

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
                    <Popup trigger={<Button id="range" basic={rangeAll} active={!rangeAll} onClick={this.setActive.bind(this)}>{rangeSelectContent}</Button>} on='click'>
                        <Nouislider
                            className="utk-digital-date-slider"
                            accessibility
                            step={20}
                            range={{ min: 1800, max: 2020 }}
                            start={rangeValues}
                            connect
                            onChange={debounce(this.onChange, 25, { 'maxWait': 100 })}
                        />
                    </Popup>
                </Button.Group>


            </div>
        )
    }

}