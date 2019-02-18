import React, {Component} from 'react';
import { Image } from 'semantic-ui-react'

export class DigitalCollection extends Component {

    isFeatured = (featured) => {

        if (featured)
            return <span className="utk-digital-all-collections--block--featured"><em className="icon-star"></em></span>
        else
            return null

    };

    render () {

        const {title, image, featured} = this.props;

        return (
            <a href="#" className="utk-digital-all-collections--block">
                {this.isFeatured(featured)}
                <Image
                    src={image}
                    alt={title}
                />
                <h3>{title}</h3>
            </a>
        )
    }

}