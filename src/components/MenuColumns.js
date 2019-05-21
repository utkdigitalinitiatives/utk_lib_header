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

        if (items) {

            const menuSection = Object.entries(items).map((section, index) => {

                let {id, title, dropdown} = section[1];
                let dropdownItems = '';
                if (dropdown) {
                    dropdownItems = Object.entries(dropdown).map((link, index) => {
                        let {title, url} = link[1];
                        return (
                            <a key={index} href={url} tabIndex="4">{title}</a>
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
