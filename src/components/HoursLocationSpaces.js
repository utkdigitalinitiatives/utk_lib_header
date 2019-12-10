import React, {Component} from 'react';
import Globals from "./Globals";

const ENDPOINT = 'hours/wp-json/spaces';
const ROUTE = '/location/';

import placeholder from '../media/placeholderimage.jpg';

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

        fetch(spacesURL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    spaces: data,
                    grab: true
                });
            })
            .catch(err => console.error(this.props.url, err.toString()));

        return null

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
                image = <img alt={item.title} src={item.image.sizes.gr_thumb}/>
            }
            return (
                <a href={item.url}>
                    {image}
                </a>
            );
        });
    }

    render() {

        const {spaces} = this.state;

        if (spaces) {
            return (
                <div className="utk-hours--listing--item--meta--links--spaces">
                    {this.renderSpaces(spaces)}
                    <a href={`https://www.lib.utk.edu/hours/spaces/?fwp_location=${this.props.location}`}>
                        View <br/>Spaces <span className="sr-only">at {this.props.location}</span>
                    </a>
                </div>
            )
        } else {
            return null
        }
    }
}
