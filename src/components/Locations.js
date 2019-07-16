import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

import {LocationsMarker} from "./LocationsMarker";

import hodges from "../media/hodges.jpg";
import pendergrass from "../media/pendergrass.jpg";
import devine from "../media/devine.jpg";
import hoskins from "../media/hoskins.jpg";

const key = 'AIzaSyCwR9_XWyvUMvw5unplwoLwxMGIiTQ_qoo'

export class Locations extends Component {

    static defaultProps = {
        center: {
            lat: 35.9523901,
            lng: -83.9323877
        },
        zoom: 15
    };

    render() {

        const {locations} = this.props

        return (
            <div className="utk-header-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: key }}
                    language={'en'}
                    region={'us'}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <LocationsMarker
                        lat={35.9462249}
                        lng={-83.9403841}
                        url="https://lib.utk.edu/agvet"
                        data={locations[225]}
                        id={225}
                        title="Pendergrass"
                        subtitle="AgVet Library"
                        formal="Pendergrass Agriculture & Veterinary Medicine Library"
                        thumbnail={pendergrass}
                    />
                    <LocationsMarker
                        lat={35.9519665}
                        lng={-83.9312689}
                        url="https://lib.utk.edu/music"
                        data={locations[226]}
                        id={226}
                        title="DeVine"
                        subtitle="Music Library"
                        formal="George F. DeVine Music Library"
                        thumbnail={devine}
                    />
                    <LocationsMarker
                        lat={35.9587213}
                        lng={-83.930422}
                        url="https://lib.utk.edu/request/storage"
                        data={locations[227]}
                        id={227}
                        title="Hoskins"
                        subtitle="Storage & Reading Room"
                        formal="James D. Hoskins Library"
                        thumbnail={hoskins}
                    />
                    <LocationsMarker
                        lat={35.955098}
                        lng={-83.929798}
                        url="https://lib.utk.edu"
                        data={locations[52]}
                        id={52}
                        title="Hodges"
                        subtitle="Main Library"
                        formal="John C. Hodges Library"
                        thumbnail={hodges}
                    />
                </GoogleMapReact>
            </div>
        )
    }
}
