import React, {Component} from 'react';
import {DigitalToolbar} from "./DigitalToolbar";
import {DigitalCollection} from "./DigitalCollection";
import { Button } from 'semantic-ui-react'

export class DigitalAll extends Component {

    render () {
        return (
            <section className="utk-digital-all">
                <div className="container">
                    <div className="utk-digital-all-header">
                    <h2>All Collections (52)</h2>
                        <div className="utk-digital-all-sort">
                        <span>Sort By</span>
                        <Button.Group color="blue">
                            <Button active>A-Z</Button>
                            <Button>Most Recent</Button>
                            <Button>Item Count</Button>
                        </Button.Group>
                        </div>
                    </div>
                    <DigitalCollection/>
                </div>
            </section>
        )
    }

}