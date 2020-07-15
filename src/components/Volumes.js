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

import fall20020 from '../media/fall2020.jpg';


export class Volumes extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className="utk-resources-menu--volumes">
                <a className="utk-volumes--feature">
                    <div>
                        <strong>Donec dictum turpis nisi vel  fermentum tempus</strong>
                        <em>Etiam lobortis exo arcu semper imperdiet, faucibus sed ad amet</em>
                        <span>Vitae Mauris</span>
                    </div>
                    <img src={fall20020} />
                </a>
                <div>
                </div>
                <div>
                    this
                </div>
            </div>
        )
    }

}