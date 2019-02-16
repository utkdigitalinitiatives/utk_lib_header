import React, {Component} from 'react';
import { Image } from 'semantic-ui-react'

export class DigitalCollection extends Component {

    render () {

        const {title, image} = this.props;

        return (
            <a href="#" className="utk-digital-all-collections--block">
                <Image
                    src={image}
                    alt={title}
                />
                <h3>{title}</h3>
            </a>
        )
    }

}