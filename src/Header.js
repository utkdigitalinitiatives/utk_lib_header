import React, {Component} from 'react';

/* libraries */
import debounce from "lodash/debounce"

/* components */
import {Menu} from "./components/Menu";
import {Search} from "./components/Search";
import {Body} from "./components/Body";

/* assets */
import './css/utk-lib-header.css';
import hero from './media/polk-hero.jpg';
import primary_logo from './media/utk-libraries-primary-white.svg';
import shortcut_logo from './media/utk-libraries-shortcut-white.svg';

/* polk */
import {Polk} from "./components/polk/Polk";

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
        });
    };

    closeResources = (e) => {
        e.stopPropagation();
        this.setState({showResources: false}, () => {
            document.removeEventListener('click', this.closeResources);
        });
    };

    toggleSearch (e) {
        e.stopPropagation();
        this.setState({showSearch: true}, () => {
            document.addEventListener('click', this.closeSearch);
        });
    };

    closeSearch = (e) => {
        e.stopPropagation();
        this.setState({showSearch: false}, () => {
            document.removeEventListener('click', this.closeSearch);
        });
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
        let rolloutClass = '';
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
            <div id="utk-header-trigger"></div>
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
                                <a onClick={this.toggleResources} className={resourcesClass}>
                                    <span className="icon-menu"></span>
                                    <span className="icon-cancel"></span>
                                    Menu
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
                <Search active={searchClass}/>
                {/*<Polk/>*/}
            </header>
            <Body/>
            </div>
        );
    }
}

export default Header;
