import React, {Component} from 'react';

export class MenuItemsSingle extends Component {

    constructor(props) {
        super(props);
    }

    buildMenu = (items) => {
        return Object.entries(items).map((link, index) => {
            let description = null
            let {title, url, xfn, post_content} = link[1];
            let rel = null
            if (xfn)
                rel = xfn;
            if (post_content)
                description = <span>{post_content}</span>
            return (
                <li>
                    <a key={index} href={url} rel={rel}>
                        {title}
                        {description}
                    </a>
                </li>
            );
        });
    }

    renderTitle = (title) => {
        if (title)
            return <h3 className="utk-resources-menu--trigger">{title}</h3>
        else
            return
    }

    render() {
        const {title, items} = this.props;

        return (
            <div className="utk-resources-menu--section">
                {this.renderTitle(title)}
                <ul className="utk-resources-menu--submenu utk-resources-menu--submenu-secondary">
                    {this.buildMenu(items)}
                </ul>
            </div>
        )
    }
}
