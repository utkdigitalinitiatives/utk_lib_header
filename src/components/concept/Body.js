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
                            <li>
                                <a href="#">Lorem Pequam</a>
                            </li>
                            <li>
                                <a href="#">Ipsum</a>
                            </li>
                            <li>
                                <a href="#">Aliquam</a>
                            </li>
                            <li>
                                <a href="#">Amet Sum Laude</a>
                            </li>
                            <li>
                                <a href="#">Maxum Semper</a>
                            </li>
                            <li>
                                <a href="#">Baquet</a>
                            </li>
                        </ul>
                        <div className='utk-cta'>
                            <a href="#">Dolor Amet </a>
                        </div>
                        <div className='utk-cta'>
                            <a href="#">Aliquam Copa </a>
                        </div>
                        <div className='utk-cta'>
                            <a href="#">Corpus Amet</a>
                        </div>
                    </aside>
                    <main className='utk-body'>
                    </main>
                </div>
            </section>
        )
    }
}