import React, {Component} from 'react';
import Globals from "./Globals";

const ENDPOINT = '/wp-json/notice';
const ROUTE = '/new';

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

class Notice extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {},
            display: true
        }
    }

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
                    data: data
                });
            })
            .catch(err => console.error(this.props.url, err.toString()));

        return null
    }

    toggleCloseButton = (e) => {
        if (this.state.display) {
            this.setState({ display: false })
        } else {
            this.setState({ display: true })
        }
    }

    closeButton(display) {
        if (display) {
            return (
                <button id="utk-notice--toggle"
                        onClick={this.toggleCloseButton}
                        className="utk-notice--toggle utk-notice--toggle-collapse">
                    <span className="sr-only">Hide Notice</span>
                </button>
            )
        } else {
            return (
                <button id="utk-notice--toggle"
                        onClick={this.toggleCloseButton}
                        className="utk-notice--toggle utk-notice--toggle-expand">
                    <span className="sr-only">Show Notice</span>
                </button>
            )
        }
    }

    render() {

        let {data, display} = this.state

        if (data.status) {

            let {id, title, content} = data.notice;

            return (
                <div className={`utk-notice utk-notice-${id} utk-notice-${display}`}>
                    <div className='container'>
                        <div className="utk-notice--main">
                            <span className="utk-notice--title">
                                {title}
                            </span>
                            <div className='utk-notice--content'
                                 dangerouslySetInnerHTML={{__html: entities.decode(content)}} />
                            {this.closeButton(display)}
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Notice;
