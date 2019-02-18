import React, {Component} from 'react';
import { Image } from 'semantic-ui-react'
import Lorem from 'react-lorem-component';

export class DigitalCollection extends Component {

    isFeatured = (featured) => {

        if (featured)
            return <span className="utk-digital-all-collections--block--featured"><em className="icon-star"></em></span>
        else
            return null

    };

    render () {

        const {title, image, featured, dataKey} = this.props;

        return (
            <a href="#" className="utk-digital-all-collections--block">
                {this.isFeatured(featured)}
                <Image
                    src={image}
                    alt={title}
                />
                <div>
                    <h3>{title}</h3>
                    <div className="utk-digital-all-collections--block--desc">
                        <Lorem seed={dataKey} count={1} paragraphLowerBound={1} paragraphUpperBound={2} />
                    </div>
                </div>
            </a>
        )
    }

}