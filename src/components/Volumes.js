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
import extra1 from '../media/fall2020-extra1.jpg';
import extra2 from '../media/fall2020-extra2.jpg';


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
                        <em>Etiam faucibus exo arcu semper imperdiet, faucibus sed ad amet</em>
                        <span>Vitae Mauris</span>
                    </div>
                    <img src={fall20020} />
                </a>
                <div className="utk-volumes--extras">
                    <a className="utk-volumes--extras--item">
                        <img src={extra1} />
                        <span>Pellentesque luctus sit amet maximus lobortis</span>
                    </a>
                    <a className="utk-volumes--extras--item">
                        <img src={extra2} />
                        <span>Pretium accumsan ante pellentesque cras placerat</span>
                    </a>
                </div>
            </div>
        )
    }

}