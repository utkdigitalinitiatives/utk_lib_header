import React, {Component} from 'react';

export class HoursTeaser extends Component {

    constructor(props) {
        super(props);
    };

    render() {

        return (
            <div className="utk-hours-teaser--hours">
                <dl>
                    <dt>Monday-Thursday</dt>
                    <dd>8am–2am</dd>
                </dl>
                <dl>
                    <dt>Friday</dt>
                    <dd>8am–Midnight</dd>
                </dl>
                <dl>
                    <dt>Saturday</dt>
                    <dd>10am–Midnight</dd>
                </dl>
                <dl>
                    <dt>Sunday</dt>
                    <dd>10am–2am</dd>
                </dl>
            </div>
        )
    }
}
