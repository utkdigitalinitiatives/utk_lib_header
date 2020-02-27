import React, {Component} from 'react';
import {MenuItemsSingle} from './MenuItemsSingle';

export class MenuSingle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            updateMenuId: null
        };
    }

    updateMenu = (setMenuId) => {
        let {activeMenu} = this.props;
        this.setState({ updateMenuId: setMenuId });
        if (setMenuId !== activeMenu) {
            this.props.activeMenu(setMenuId);
        }
    }

    static getMedia (src) {
        if (src)
            return (
                <div className="utk-resources-menu--media">
                    <div className="utk-resources-menu--media--image"><img src={src} alt="Students studying at Hodges Library." /></div>
                    <div className="utk-resources-menu--media--background"><img src={src} alt="Students studying at Hodges Library." /></div>
                </div>
            )
    }

    render() {

        const {items, title, className, media} = this.props || {};

        if (items) {
            return (
                <div className={className}>
                    {MenuSingle.getMedia(media)}
                    <MenuItemsSingle title={title} items={items} setMenuAs={this.updateMenu} />
                </div>
            )

        } else {
            return (
                <div></div>
            )
        }
    }
}
