import React, {Component} from 'react';

export class Body extends Component {

    constructor(props) {
        super(props);
    };

    render() {

        const {shortcut, stickyMenu, stickyMenuAnchored} = this.props;

        let headerHero = '';
        if (shortcut === true) {
            headerHero = ' utk-hero-shrink';
        }

        let stickyMenuClass = '';
        if (stickyMenu === true) {
            stickyMenuClass = ' utk-menu-sticky';
            if (stickyMenuAnchored === true) {
                stickyMenuClass = ' utk-menu-sticky utk-menu-sticky-anchored';
            }
        }

        return (
            <section className='utk-main'>
                <div id="utk-menu-normalize-trigger"></div>
                <div className="utk-container">
                    <aside className={`utk-sidebar-menu${stickyMenuClass}`} id="utk-sticky-menu">
                        <div id="utk-menu-sticky-trigger"></div>
                        <ul className="utk-sidebar-menu--items">
                            <li className="active">
                                <a href="#">Current Menu Item</a>
                            </li>
                            <li>
                                <a href="#">Menu Item</a>
                            </li>
                            <li>
                                <a href="#">Menu Item</a>
                            </li>
                            <li>
                                <a href="#">Menu Item</a>
                            </li>
                            <li>
                                <a href="#">Menu Item</a>
                            </li>
                        </ul>
                        <div className='utk-cta'>
                            <a href="#">Call to Action</a>
                        </div>
                        <div className='utk-cta'>
                            <a href="#">Call to Action</a>
                        </div>
                    </aside>
                    <main className='utk-body'>
                        <span>Content Body</span>
                    </main>
                </div>
            </section>
        )
    }
}