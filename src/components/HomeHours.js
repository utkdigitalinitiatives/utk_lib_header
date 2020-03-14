import React, {Component} from 'react';
import {Hours} from "./Hours";

class HomeHours extends Component {
    render() {
        return (
            <Hours hideChat={true} expanded={true} />
        )
    }
}

export default HomeHours;
