import React, {Component} from 'react';
import {FooterLibraries} from "./components/FooterLibraries";
import {FooterUniversity} from "./components/FooterUniversity";
import {FooterSystem} from "./components/FooterSystem";
import Globals from "./components/Globals";

const ENDPOINT = 'assets/wp-json/libmenu';
const ROUTE = '/header';

/* header component */
class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

        const sessionMenu = 'utk_lib_header_menu';

        if (sessionStorage.getItem(sessionMenu) === null) {

            fetch(Globals.URL + ENDPOINT + ROUTE, {
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {

                    sessionStorage.setItem(sessionMenu, JSON.stringify(data));
                    this.setState({menuHeader: data})

                })
                .catch(err => console.error(this.props.url, err.toString()));

        } else {

            const sessionData = sessionStorage.getItem(sessionMenu);
            this.setState({menuHeader: JSON.parse(sessionData)});

        }

        return null
    }

    render() {

        if (this.state.menuHeader) {

            const {drawer, footer, university} = this.state.menuHeader;

            return (
                <React.Fragment>
                    <FooterLibraries drawer={drawer} footer={footer} />
                    <FooterUniversity university={university} />
                    <FooterSystem />
                    <div className="utk-lib-triggers">
                        <span id="utk-trigger-header"></span>
                    </div>
                </React.Fragment>
            );

        } else {
            return null
        }
    }
}

export default Footer;
