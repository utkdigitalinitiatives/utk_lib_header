import React, {Component} from 'react';

/* libraries */
import debounce from "lodash/debounce"
import findIndex from "lodash/findIndex"

/* components */
import {Menu} from "./components/Menu";
import {Search} from "./components/Search";

/* assets */
import './css/utk-lib-header.css';
import primary_logo from './media/utk-libraries-primary-white.svg';
import shortcut_logo from './media/utk-libraries-shortcut-white.svg';

/* concept*/
import {Hero} from "./components/concept/Hero";
import {Body} from "./components/concept/Body";
import {Subfooter} from "./components/concept/Subfooter";

/* header component */
class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showResources: false,
            showSearch: false,
            shortcutLogo: false,
            stickyMenu: false,
            stickyMenuAnchored: false
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
        });
    };

    closeSearch = (e) => {
        e.stopPropagation();
        let isSearch = findIndex(e.path, {'className': 'utk-search-wrapper'});
        if (isSearch === -1) {
            this.setState({showSearch: false}, () => {
                document.removeEventListener('click', this.closeSearch);
            });
        }
    };

    isTop(el) {
        return el.getBoundingClientRect().top;
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom;
    }

    /* scroll tracking, concepting @todo: cleanup in wp */

    componentDidMount() {
        document.addEventListener('scroll', this.trackStickyMenu);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackStickyMenu);
    }

    trackStickyMenu = debounce((e) => {
        const collapseWatch = document.getElementById('utk-header-watch');
        const stickyMenuTrigger = document.getElementById('utk-menu-sticky-trigger');

        if (this.isTop(collapseWatch) >= this.isBottom(stickyMenuTrigger)) {
            this.setState({stickyMenu: true});
            document.removeEventListener('scroll', this.trackStickyMenu);
            document.addEventListener('scroll', this.trackNormalizeMenu);
            document.addEventListener('scroll', this.trackShortcutMenu);
        } else {
            this.setState({stickyMenu: false});
            document.removeEventListener('scroll', this.trackNormalizeMenu);
            document.removeEventListener('scroll', this.trackShortcutMenu);
            document.addEventListener('scroll', this.trackStickyMenu);
        }
    }, 25);

    trackNormalizeMenu =  debounce((e) => {
        const menuNormalizeTrigger = document.getElementById('utk-menu-normalize-trigger');
        const stickyMenuTrigger = document.getElementById('utk-menu-sticky-trigger');

        if (this.isTop(menuNormalizeTrigger) > this.isBottom(stickyMenuTrigger)) {
            this.setState({stickyMenu: false});
            document.removeEventListener('scroll', this.trackNormalizeMenu);
            document.removeEventListener('scroll', this.trackShortcutMenu);
            document.addEventListener('scroll', this.trackStickyMenu);
        } else {
            this.setState({stickyMenu: true});
            document.removeEventListener('scroll', this.trackResetStickyMenu);
            document.addEventListener('scroll', this.trackShortcutMenu);
            document.addEventListener('scroll', this.trackNormalizeMenu);
        }
    }, 25);

    trackShortcutMenu = debounce((e) => {
        const sidebarMenu = document.getElementById('utk-sticky-menu');
        const collapseTrigger = document.getElementById('utk-header-trigger');

        if (this.isBottom(sidebarMenu) > this.isBottom(collapseTrigger)) {
            document.removeEventListener('scroll', this.trackNormalizeMenu);
            document.removeEventListener('scroll', this.trackShortcutMenu);
            document.addEventListener('scroll', this.trackResetStickyMenu);
            this.setState({shortcutLogo: true});
            this.setState({stickyMenu: true});
            this.setState({stickyMenuAnchored: true});
        } else {
            this.setState({shortcutLogo: false});
            this.setState({stickyMenu: true});
            this.setState({stickyMenuAnchored: false});
            document.removeEventListener('scroll', this.trackResetStickyMenu);
            document.addEventListener('scroll', this.trackShortcutMenu);
            document.addEventListener('scroll', this.trackNormalizeMenu);
        }
    }, 25);

    trackResetStickyMenu = debounce((e) => {
        const sidebarMenu = document.getElementById('utk-sticky-menu');
        const collapseTrigger = document.getElementById('utk-header-trigger');

        if (this.isTop(sidebarMenu) > 100) {
            document.removeEventListener('scroll', this.trackResetStickyMenu);
            document.addEventListener('scroll', this.trackShortcutMenu);
            document.addEventListener('scroll', this.trackNormalizeMenu);
            this.setState({stickyMenu: true});
            this.setState({stickyMenuAnchored: false});
            this.setState({shortcutLogo: false});
        } else {
            document.addEventListener('scroll', this.trackResetStickyMenu);
            document.removeEventListener('scroll', this.trackShortcutMenu);
            document.removeEventListener('scroll', this.trackNormalizeMenu);
            this.setState({shortcutLogo: true});
            this.setState({stickyMenu: true});
            this.setState({stickyMenuAnchored: true});
        }
    }, 25);

    render() {

        const {showResources, showSearch, shortcutLogo, stickyMenu, stickyMenuAnchored} = this.state;

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
            <div className={rolloutClass}>
            <div id="utk-header-watch"></div>
            <header className={`utk-header${resourcesClass}${searchClassHeader}${headerHero}`}>
                <div className={`utk-header-main${headerShortcutClass}`}>
                    <div className="utk-container">

                        <div className="utk-logo-wrapper">
                            <a href="http://lib.utk.edu">
                                <img src={primary_logo} className="utk-logo" alt="University of Tennessee Libraries" />
                            </a>
                        </div>

                        <div className="utk-shortcut-wrapper">
                            <a href="http://lib.utk.edu">
                                <img src={shortcut_logo} className="utk-logo-shortcut" alt="University of Tennessee Libraries" />
                            </a>
                        </div>

                        <div className="utk-header-actions">

                            <div className="utk-header-actions--item utk-header-actions--utk">
                                <a href="https://utk.edu">utk.edu</a>
                            </div>

                            <div className="utk-header-actions--item utk-header-actions--home">
                                <a href="https://lib.utk.edu">lib.utk.edu</a>
                            </div>

                            <div className="utk-header-actions--item utk-header-actions--resources">
                                <a onClick={this.toggleResources} className={`utk-menu-trigger${resourcesClass}`}>
                                    <span className="icon-menu"></span>
                                    <span className="icon-cancel"></span>
                                    <em>Menu</em>
                                </a>
                            </div>

                            <div className="utk-header-actions--item utk-header-actions--search">
                                <a onClick={this.toggleSearch} className={searchClass}>
                                    <span className="icon-search"></span>
                                    <span className="icon-cancel"></span>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
                <Menu active={resourcesClass} />
                <Search active={searchClass} showSearch={showSearch} ref="search" />
            </header>
            <Hero shortcut={shortcutLogo} stickyMenu={stickyMenu} />
            <Body shortcut={shortcutLogo} stickyMenu={stickyMenu} stickyMenuAnchored={stickyMenuAnchored} />
            <div id="utk-header-trigger"></div>
            <Subfooter/>
            <div className="utk-body-overlay"></div>
            </div>
        );
    }
}

export default Header;
