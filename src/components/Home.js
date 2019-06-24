import React, {Component} from 'react';
import {Menu} from "./Menu";

class Home extends Component {
    render() {
        return (
            <Menu expanded={true} active={true} />
        )
    }
}

export default Home;
