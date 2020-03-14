import React, {Component} from 'react';
import Globals from "./Globals";

const ENDPOINT = 'hours/wp-json/spaces';
const ROUTE = '/location/';

import placeholder from '../media/placeholderimage.jpg';
import {Chat} from "./Chat";

export class HoursLocationSpaces extends Component {

    constructor(props) {
        super(props);

        this.state = {
            spaces: false,
            grab: false
        };
    }

    fetchLocationSpaces() {

        let spacesURL = Globals.URL + ENDPOINT + ROUTE
        spacesURL = spacesURL + this.props.location + '/2'

        const sessionSpaces = 'utk_lib_spaces_' + this.props.location;

        if (sessionStorage.getItem(sessionSpaces) === null) {

            fetch(spacesURL, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    sessionStorage.setItem(sessionSpaces, JSON.stringify(data));
                    this.setState({
                        spaces: data,
                        grab: true
                    });
                })
                .catch(err => console.error(this.props.url, err.toString()));

            return null

        } else {

            this.setState({
                    spaces: JSON.parse(sessionStorage.getItem(sessionSpaces)),
                    grab: true
                }
            );

        }
    }

    componentDidMount() {
        if (!this.state.grab)
            this.fetchLocationSpaces()
    }

    componentDidUpdate() {
        if (!this.state.grab)
            this.fetchLocationSpaces()
    }

    renderSpaces = (spaces) => {
        return spaces.map((item, index) => {
            let image = null
            if (item.image) {
                image = <img alt={item.title} src={item.image}/>
            }
            return (
                <a href={item.url}>
                    {image}
                </a>
            );
        });
    }

    renderChat(hash, hide) {
        if (!hide)
            return (
                <Chat libchat={hash} />
            )
    }

    render() {

        const {spaces} = this.state;

        const {chat, hideChat} = this.props;

        if (spaces) {
            return (
                <div className="utk-hours--listing--item--meta--links--spaces">
                    <div className="utk-hours-contingency">
                        <div className="utk-hours-contingency--chat">
                            {this.renderChat(chat, hideChat)}
                        </div>
                        <div className="utk-hours-contingency--phone">
                            <a href={`tel:${this.props.phone}`}>{this.props.phone}</a>
                        </div>
                    </div>
                    {/*{this.renderSpaces(spaces)}*/}
                    {/*<a href={`https://www.lib.utk.edu/hours/spaces/?fwp_location=${this.props.location}`}>*/}
                    {/*    View <br/>Spaces <span className="sr-only">at {this.props.location}</span>*/}
                    {/*</a>*/}
                </div>
            )
        } else {
            return null
        }
    }
}
