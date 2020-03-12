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
            data: {}
        }
    }

    componentDidMount() {
        this.fetchNotices()
    }

    fetchNotices() {
        fetch('Globals.URL' + ENDPOINT + ROUTE, {
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

    render() {

        let {data} = this.state

        if (data.status) {

            let {id, title, content} = data.notice;

            return (
                <div className={`utk-notice utk-notice-${id}`}>
                    <div className='container'>
                        <span className="utk-notice--title">
                            {title}
                        </span>
                        <div className='utk-notice--content' dangerouslySetInnerHTML={{__html: entities.decode(content)}} />
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Notice;
