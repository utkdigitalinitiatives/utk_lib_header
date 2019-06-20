import React, {Component} from 'react';
import {HoursLocation} from "./HoursLocation";
import Globals from "./Globals";

import hodges from '../media/hodges.jpg';
import pendergrass from '../media/pendergrass.jpg';
import devine from '../media/devine.jpg';
import hoskins from '../media/hoskins.jpg';
// import {Locations} from "./Locations";

const ENDPOINT = 'wp-json/libcal';
const ROUTE = '/hours';

export class Hours extends Component {

    constructor(props) {
        super(props);

        this.state = {
            locations: {},
            timestamp: 0,
            grab: false,
            layout: 'default'
        };
    }

    fetchLibCalHours () {

        fetch(Globals.URL + ENDPOINT + ROUTE, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    locations: data.locations,
                    timestamp: data.timestamp,
                    grab: true
                });
            })
            .catch(err => console.error(this.props.url, err.toString()));

        return null

    }

    componentDidUpdate() {

        if (this.props.expanded && !this.state.grab)
            this.fetchLibCalHours()

    }

    theCommons = (hodges) => {
        let commons = hodges
        commons.name = 'The Commons'
        commons.url = 'https://commons.utk.edu/'
        return(commons)
    }

    // toggleDefault = () => {
    //     this.setState({layout: 'default'});
    // }
    //
    // toggleMap = () => {
    //     this.setState({layout: 'map'});
    // }

    render() {

        const {locations} = this.state;

        if (Object.keys(locations).length !== 0)
            // if (this.state.layout === 'default')
                return (
                    <div>
                        <div className="utk-hours">
                            <div className="utk-hours-header">
                                <h3>Libraries &amp; Locations</h3>
                                {/*<div className="utk-resources-toggle">*/}
                                    {/*<a className="utk-resources-toggle--map" onClick={this.toggleMap}>Show on Map</a>*/}
                                {/*</div>*/}
                            </div>
                            <ul className="utk-hours--listing">
                                <div className="utk-hours--listing--col">
                                    <HoursLocation
                                        url="https://lib.utk.edu"
                                        data={locations[52]}
                                        id={52}
                                        children={[this.theCommons(locations[52]),locations[217],locations[224]]}
                                        title="Hodges"
                                        subtitle="Main Library"
                                        formal="John C. Hodges Library"
                                        thumbnail={hodges}
                                    />
                                </div>
                                <div className="utk-hours--listing--col">
                                    <HoursLocation
                                        url="https://lib.utk.edu/agvet"
                                        data={locations[225]}
                                        id={225}
                                        title="Pendergrass"
                                        subtitle="AgVet Library"
                                        formal="Pendergrass Agriculture & Veterinary Medicine Library"
                                        thumbnail={pendergrass}
                                    />
                                    <HoursLocation
                                        url="https://lib.utk.edu/music"
                                        data={locations[226]}
                                        id={226}
                                        title="DeVine"
                                        subtitle="Music Library"
                                        formal="George F. DeVine Music Library"
                                        thumbnail={devine}
                                    />
                                    <HoursLocation
                                        url="https://lib.utk.edu/request/storage"
                                        data={locations[227]}
                                        id={227}
                                        title="Hoskins"
                                        subtitle="Storage & Reading Room"
                                        formal="James D. Hoskins Library"
                                        thumbnail={hoskins}
                                    />
                                </div>
                            </ul>
                        </div>
                    </div>
                )
            // else if (this.state.layout === 'map')
            //     return (
            //         <div className="utk-hours utk-hours-map">
            //             <div className="container">
            //                 <div className="utk-hours-header">
            //                     <div className="utk-resources-toggle">
            //                         <a className="utk-resources-toggle--default" onClick={this.toggleDefault}>Close Map</a>
            //                     </div>
            //                 </div>
            //             </div>
            //             <Locations locations={locations} />
            //         </div>
            //     )
            // else
            //     return
        else
            return (
                <div className="utk-hours">
                    <div className="utk-hours-header">
                        <h3>Libraries &amp; Locations</h3>
                    </div>
                    <ul className="utk-hours--listing">
                        <h5 className="utk-hours--loading spinner">Loading today's hours...</h5>
                    </ul>
                </div>
            )
    }
}
