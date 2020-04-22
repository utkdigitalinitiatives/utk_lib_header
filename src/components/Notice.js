import React, {Component} from 'react';
import Globals from "./Globals";

const ENDPOINT = '/wp-json/notice';
const ROUTE = '/new';

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();
const noticeSession = 'utk_lib_notice';

class Notice extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {},
            display: true,
            timestamp: null
        }
    }

    componentDidMount() {
        this.fetchNotices()
        this.formatNoticeDisplay()
    }

    fetchNotices() {
        fetch('https://utklibrary.test' + ENDPOINT + ROUTE, {
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

    /*
     * formats display of notice by checking session
     * storage for stored display state and timestamps
     */
    formatNoticeDisplay() {

        const setNotice = {
            display: true,
            timestamp: Date.now()
        }

        // const interval =  6 * 3600 * 1000 // calc. number of milliseconds in 6 hours
        const interval =  1000 // calc. number of milliseconds in 6 hours

        if (sessionStorage.getItem(noticeSession) === null) {

            sessionStorage.setItem(noticeSession, JSON.stringify(setNotice));

            this.setState({
                timestamp: setNotice.timestamp
            })

        } else {

            const storedNotice = JSON.parse(sessionStorage.getItem(noticeSession));
            let updateNotice  = parseInt(storedNotice.timestamp) + interval;

            this.setState({
                timestamp: storedNotice.timestamp
            })

            if ( updateNotice < setNotice.timestamp ) {

                sessionStorage.setItem(noticeSession, JSON.stringify(setNotice));

            } else {

                if (storedNotice.display === false) {
                    this.setState({
                        display: false
                    })
                }

            }
        }
    }

    /*
     * toggles notice session data for display
     */
    toggleNoticeDisplayData = (status) => {
        let updateNoticeDisplay = JSON.parse(sessionStorage.getItem(noticeSession));
        updateNoticeDisplay.display = status
        sessionStorage.setItem(noticeSession, JSON.stringify(updateNoticeDisplay));
    }


    /*
     * checks if wordpress post updated date is greater
     * than stored interval, if yes, forces display
     */
    forceNoticeDisplay = (data, timestamp) => {
        const updated = new Date(data.timestamp).getTime();

        if (updated > timestamp) {
            this.toggleNoticeDisplayData(true);
            this.setState({
                display: true
            })
        }
    }

    /*
     * toggles notice display, default = true
     */
    toggleCloseButton = (e) => {
        if (this.state.display) {

            this.toggleNoticeDisplayData(false);
            this.setState({
                display: false
            })

        } else {

            this.toggleNoticeDisplayData(true);
            this.setState({
                display: true
            })

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

    renderTitle = (title, hide) =>{

        let titleClasses = 'utk-notice--title'

        if (hide === true) {
            titleClasses = titleClasses + ' sr-only'
        }

        return <span className={titleClasses}>Classes are online and so are we!</span>
    }

    render() {

        let {data, display, timestamp} = this.state

        if (data.status) {

            this.forceNoticeDisplay(data, timestamp);

            let {id, title, hide_title, type, content, buttons} = data.notice;

            return (
                <div className={`utk-notice utk-notice-${id} utk-notice-${display}`}>
                    <div className='container'>
                        <div className="utk-notice--main">
                            {this.renderTitle(title, hide_title)}
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
