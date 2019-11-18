import React, {Component} from 'react';
import {FooterLibraries} from "./components/FooterLibraries";
import {FooterUniversity} from "./components/FooterUniversity";
import {FooterSystem} from "./components/FooterSystem";
import Globals from "./components/Globals";

/* header component */
class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menuHeader : {
                about : {},
                drawer : {},
                help : {},
                services_primary : {},
                services_speciality : {}
            },
        };
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

        return (
            <React.Fragment>
                <FooterLibraries main={this.state.menuHeader.drawer} help={this.state.menuHeader.help} />
                {/*<FooterUniversity university={} />*/}
                {/*<FooterSystem system={} />*/}
                <div className="utk-lib-triggers">
                    <span id="utk-trigger-header"></span>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;
