import React, {Component} from 'react';
import {Hours} from "./Hours";

class HoursBody extends Component {
    render() {
        return (
            <Hours layout="default" expanded={true} />
        )
    }
}

export default HoursBody;
