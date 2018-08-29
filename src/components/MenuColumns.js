import React, {Component} from 'react';

export class MenuColumns extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {items} = this.props || {};

        if (items) {

            const menuSection = Object.entries(items).map((section, index) => {

                let {title, url, classes, target, dropdown} = section[1];

                let dropdownItems = Object.entries(dropdown).map((link, index) => {

                    let {title, url, classes, target} = link[1];

                    return (
                        <a href={url}>{title}</a>
                    );

                });

                return (
                    <div>
                        <h3>{title}</h3>
                        {dropdownItems}
                    </div>
                );
            });

            return (
                <div className="utk-resources-menu--col">
                    {menuSection}
                </div>
            )

        } else {
            return (
                <div></div>
            )
        }
    }
}