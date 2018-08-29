import React, {Component} from 'react';
import {MenuColumns} from "./MenuColumns";

// const URL = 'https://www-staging.lib.utk.edu';
const URL = 'https://www-staging.lib.utk.edu';
const ENDPOINT = '/assets/wp-json/libmenu';
const ROUTE = '/drawer';


export class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menuDrawer: [],
        };
    }

    componentDidMount() {
        fetch(URL + ENDPOINT + ROUTE)
            .then(response => response.json())
            .then(data => {
                this.setState({ menuDrawer: data })
            })
            .catch(err => console.error(this.props.url, err.toString()));

        return null
    }

    render() {

        const {active} = this.props;
        const {menuDrawer} = this.state;

        const menuColumns = Object.entries(menuDrawer).map((columns, index) => {
            return (
                <MenuColumns items={columns[1].data} />
            );
        });

        return (
            <div className={`utk-header-resources ${active}`}>
                <a className="utk-resources-close">
                    <span className="icon-cancel"></span>
                </a>
                <div className="utk-container">
                    <div className="utk-resources-contact">

                        <p>
                            1015 Volunteer Boulevard<br/>
                            Knoxville, TN 37996-1000<br/>
                            <a href="tel:865-974-4351">865-974-4351</a>
                        </p>

                        <div className="utk-resources-contact--social">
                            <a>
                                <span className="icon-facebook"></span>
                            </a>
                            <a>
                                <span className="icon-instagram"></span>
                            </a>
                            <a>
                                <span className="icon-twitter"></span>
                            </a>
                            <a>
                                <span className="icon-pinterest-circled"></span>
                            </a>
                            <a>
                                <span className="icon-youtube-play"></span>
                            </a>
                        </div>
                    </div>
                    <div className="utk-resources-menu">
                        {menuColumns}
                    </div>
                </div>
            </div>
        )
    }
}