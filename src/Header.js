import React, {Component} from 'react';

/* libraries */
import debounce from "lodash/debounce"
import findIndex from "lodash/findIndex"

/* components */
import {Menu} from "./components/Menu";
import {Search} from "./components/Search";

/* assets */
import './css/utk-lib-header.css';
import primary_logo from './media/ut-knoxville.svg';
import square_logo from './media/ut-square.svg';
import {Placeholder} from "./components/Placeholder";

/* header component */
class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showResources: false,
            showSearch: false,
            shortcutLogo: false,
        };

        this.toggleResources = this.toggleResources.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
    };

    toggleResources (e) {
        e.stopPropagation();
        this.setState({showResources: true}, () => {
            document.addEventListener('click', this.closeResources);
            document.body.classList.add('utk-menu-open');
        });
    };

    closeResources = (e) => {
        e.stopPropagation();
        let isHeader = findIndex(e.path, {'className': 'utk-header utk-header-expand-menu'});
        let isClose = findIndex(e.path, {'className': 'utk-resources-close'});
        let isMenuButton = findIndex(e.path, {'className': 'utk-menu-trigger utk-header-expand-menu'});

        if (isHeader === -1 || isClose !== -1 || isMenuButton !== -1) {
            this.setState({showResources: false}, () => {
                document.removeEventListener('click', this.closeResources);
                document.body.classList.remove('utk-menu-open');
            });
        }
    };

    toggleSearch (e) {
        e.stopPropagation();
        this.setState({showSearch: true}, () => {
            document.addEventListener('click', this.closeSearch);
            this.refs.search.utkSearchField.focus();
            this.refs.search.utkSearchField.value = '';
            document.body.classList.add('utk-search-open');
        });
    };

    closeSearch = (e) => {
        e.stopPropagation();
        let isSearch = findIndex(e.path, {'className': 'utk-search-wrapper'});
        if (isSearch === -1) {
            this.setState({showSearch: false}, () => {
                document.removeEventListener('click', this.closeSearch);
                document.body.classList.remove('utk-search-open');
            });
        }
    };

    isTop(el) {
        return el.getBoundingClientRect().top;
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom;
    }

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = debounce((e) => {
        const collapseWatch = document.getElementById('utk-header-watch');
        const collapseTrigger = document.getElementById('utk-header-trigger');

        if (this.isTop(collapseWatch) >= this.isBottom(collapseTrigger)) {
            this.setState({shortcutLogo: true});
            // document.removeEventListener('scroll', this.trackScrolling);
        } else {
            this.setState({shortcutLogo: false});
        }
    }, 5);

    render() {

        const {showResources, showSearch, shortcutLogo} = this.state;

        let resourcesClass = '';
        let rolloutClass = 'utk-rollin';
        if (showResources === true) {
            resourcesClass = ' utk-header-expand-menu';
            rolloutClass = 'utk-rollout';
        }

        let searchClass = '';
        let searchClassHeader = '';
        if (showSearch === true) {
            searchClass = ' utk-header-expand-search';
            searchClassHeader = ' utk-search-active';
        }

        let headerShortcutClass = '';
        let headerHero = '';
        if (shortcutLogo === true) {
            headerShortcutClass = ' utk-shortcut';
            headerHero = ' utk-header-shrink';
        }

        return (
            <div>
            <div id="utk-header-watch"></div>
            <div id="utk-header-trigger"></div>
            <header className={`utk-header`}>
                <div className={`utk-header-main`}>
                    <div className="container">

                        <div id="utk-logo" className="utk-logo-wrapper">
                            <a href="https://www.utk.edu" tabIndex="1">
                                <img src={primary_logo} className="utk-logo utk-logo-primary" alt="University of Tennessee Libraries" />
                                <img src={square_logo} className="utk-logo utk-logo-square" alt="University of Tennessee Libraries" />
                            </a>
                            <a href="https://www.lib.utk.edu" className="utk-logo-unit" tabIndex="1">Libraries</a>
                        </div>

                        <div className="utk-header-actions">

                            <div className="utk-header-actions--item utk-header-actions--home">
                                <a href="https://lib.utk.edu" tabIndex="3">lib.utk.edu</a>
                            </div>

                            <div className="utk-header-actions--item utk-header-actions--resources">
                                <a href="#menu" onClick={this.toggleResources} className={`utk-menu-trigger${resourcesClass}`}  tabIndex="4">
                                    <span className="icon-menu"></span>
                                    <span className="icon-cancel"></span>
                                    <em>Menu</em>
                                </a>
                            </div>

                            <div className="utk-header-actions--item utk-header-actions--search">
                                <a href="#search" onClick={this.toggleSearch} className={searchClass}  tabIndex="5">
                                    <span className="icon-search"></span>
                                    <span className="icon-cancel"></span>
                                    <em>Search</em>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="utk-header-super">
                    <div className="container">
                        <ul className="utk-header-super--menu">
                            {/*<li><a><strong>Today's Hours <span className='icon-angle-right'></span></strong></a></li>*/}
                            {/*<li><a>Hodges: 24 Hours</a></li>*/}
                            {/*<li><a>Pendergrass: 8pm-6pm</a></li>*/}
                            {/*<li><a>DeVine: 8pm-5pm</a></li>*/}
                            <li><a href="#" tabIndex="2">Hours</a></li>
                            <li><a href="#" tabIndex="2">Locations</a></li>
                            <li><a href="#" tabIndex="2">Databases</a></li>
                            <li><a href="#" tabIndex="2">Services</a></li>
                        </ul>
                    </div>
                </div>
                <Menu active={resourcesClass} />
                <Search showSearch={showSearch} ref="search" />
            </header>
            <div className="utk-body-overlay"></div>
            <Placeholder/>
            </div>
        );
    }
}

export default Header;
