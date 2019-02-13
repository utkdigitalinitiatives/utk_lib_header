import React, {Component} from 'react';
import { Accordion, Icon } from 'semantic-ui-react'

export class DigitalFeaturedCollection extends Component {

    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }


    render () {

        const { activeIndex } = this.state

        return (
            <div className="utk-digital-header-featured-credit">
                <h2>Featured Collection</h2>
                <h3><a>Images of East Tennessee</a></h3>
                <p>
                    <a>Gay Street Viaduct, 1924-1930</a>
                </p>
            </div>
        )
    }

}