import React, {Component} from 'react';
import {DigitalHeader} from "./DigitalHeader";
import {DigitalBody} from "./DigitalBody";
import {DigitalFooter} from "./DigitalFooter";

export class Digital extends Component {

    render () {
        return (
            <div className="utk-digital">
                <DigitalHeader/>
                <DigitalBody/>
                <DigitalFooter/>
            </div>
        )
    }

}