import React, {Component} from 'react';
import {DigitalHeader} from "./DigitalHeader";
import {DigitalAll} from "./DigitalAll";
import {DigitalFooter} from "./DigitalFooter";

export class Digital extends Component {

    render () {
        return (
            <div className="utk-digital">
                <DigitalHeader/>
                <DigitalAll/>
                <DigitalFooter/>
            </div>
        )
    }

}