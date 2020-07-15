import React, {Component} from 'react';
import {MenuColumns} from "./MenuColumns";
import {MenuSingle} from "./MenuSingle";

import {Hours} from "./Hours";
// import {Help} from "./Help";
import Globals from "./Globals";
import {Chat} from "./Chat";
// import {Locations} from "./Locations";

const ENDPOINT = 'assets/wp-json/libmenu';
const ROUTE = '/header';

import about from '../media/student-studying.jpg';


export class Volumes extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className="utk-resources-menu--volumes">

            </div>
        )
    }

}