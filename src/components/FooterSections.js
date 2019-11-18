import React, {Component} from 'react';
import {FooterLibraries} from "./FooterLibraries";
import {FooterUniversity} from "./FooterUniversity";
import {FooterSystem} from "./FooterSystem";
import Globals from "./Globals";

export class FooterSections extends Component {

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
            </React.Fragment>
        )
    }
}
