import React, {Component} from 'react';
import {MenuItemsSingle} from './MenuItemsSingle';
import {MenuItems} from "./MenuItems";

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

    render() {

        const {items, title, className} = this.props || {};

        if (items) {
            return (
                <div className={className}>
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
