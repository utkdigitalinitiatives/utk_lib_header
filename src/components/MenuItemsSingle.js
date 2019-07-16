import React, {Component} from 'react';

export class MenuItemsSingle extends Component {

    constructor(props) {
        super(props);
    }

    buildMenu = (items) => {
        return Object.entries(items).map((link, index) => {
            let description = null
            let {title, url, post_content} = link[1];
            if (post_content)
                description = <span>{post_content}</span>
            return (
                <li>
                    <a key={index} href={url} tabIndex="4">
                        {title}
                        {description}
                    </a>
                </li>
            );
        });
    }

    render() {
        const {title, items} = this.props;

        return (
            <div className="utk-resources-menu--section">
                <h3 className="utk-resources-menu--trigger">{title}</h3>
                <ul className="utk-resources-menu--submenu utk-resources-menu--submenu-secondary">
                    {this.buildMenu(items)}
                </ul>
            </div>
        )
    }
}
