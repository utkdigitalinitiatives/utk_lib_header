import React, {Component} from 'react';
import Globals from "./Globals";

const ENDPOINT = '/wp-json/notice';
const ROUTE = '/new';

class Notice extends Component {

    componentDidMount() {

        this.fetchNotices()

    }

    fetchNotices() {

        fetch(Globals.URL + ENDPOINT + ROUTE, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    notice: data
                });
            })
            .catch(err => console.error(this.props.url, err.toString()));

        return null

    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Notice;
