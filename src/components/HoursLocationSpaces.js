import React, {Component} from 'react';
import Globals from "./Globals";

const ENDPOINT = 'hours/wp-json/spaces';
const ROUTE = '/location/';

export class HoursLocationSpaces extends Component {

    constructor(props) {
        super(props);

        this.state = {
            spaces: false,
            grab: false
        };
    }

    fetchLocationSpaces() {

        fetch(Globals.URL + ENDPOINT + ROUTE + this.props.location, {
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

    render() {

        const {spaces} = this.state;

        if (spaces) {

            console.log(spaces)

            return (
                <React.Fragment>
                    x
                </React.Fragment>
            )
        } else {
            return null
        }
    }
}
