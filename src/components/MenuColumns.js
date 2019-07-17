import React, {Component} from 'react';
import {MenuItems} from './MenuItems';

export class MenuColumns extends Component {

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

    render() {

        const {items} = this.props || {};

        if (items.wpse_children) {

            const menuSection = Object.entries(items.wpse_children).map((section, index) => {

                let {id, title, wpse_children} = section[1];
                let dropdownItems = '';
                if (wpse_children) {
                    dropdownItems = Object.entries(wpse_children).map((link, index) => {
                        let {title, url} = link[1];
                        return (
                            <a key={index} href={url}>{title}</a>
                        );
                    });
                }

                return (
                    <MenuItems key={index} menuId={id} title={title} dropdownItems={dropdownItems} setMenuAs={this.updateMenu} />
                )
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
