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
import shortcut_logo from './media/utk-libraries-shortcut-white.svg';

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

                        <div className="utk-logo-wrapper">
                            <a href="https://www.utk.edu">
                                <img src={primary_logo} className="utk-logo" alt="University of Tennessee Libraries" />
                            </a>
                            <a href="https://www.utk.edu" className="utk-logo-unit">Libraries</a>
                        </div>

                        <div className="utk-header-actions">

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
                <div className="utk-header-super">
                    <div className="container">
                        <ul className="utk-header-super--menu">
                            <li><a href="#">Hours</a></li>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">Databases</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                    </div>
                </div>
                <Menu active={resourcesClass} />
                <Search active={searchClass} showSearch={showSearch} ref="search" />
            </header>
            <div className="utk-body-overlay"></div>
                <div id="lipsum">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod augue justo, eu tempus libero condimentum eu. Nulla cursus ut enim in fringilla. Ut eu pulvinar ex. Curabitur pretium massa eleifend ex tempor molestie. Aenean faucibus congue nibh, sit amet tempus augue eleifend eu. Morbi sollicitudin nunc sed imperdiet imperdiet. Fusce tincidunt luctus erat, ut finibus tortor pharetra vel. Praesent vel rutrum sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum varius ex in sem fringilla, a vehicula sem ornare.
                    </p>
                    <p>
                        Vestibulum volutpat cursus elit, id vehicula nunc aliquet nec. Duis vestibulum massa quis nunc mattis, sit amet vulputate quam congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam a elit nisi. Vestibulum pretium interdum accumsan. Nulla condimentum magna vitae varius gravida. Donec pellentesque lacinia nulla, eleifend pellentesque nisl viverra vitae. Phasellus aliquam erat et rhoncus consequat. Quisque cursus arcu at massa facilisis, eu tincidunt erat vestibulum. Suspendisse pretium convallis sem eu ullamcorper. Ut justo mauris, vestibulum in sem nec, blandit dictum urna.
                    </p>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In commodo, purus vitae tempor tristique, massa odio mattis purus, sit amet elementum lectus metus vel diam. Phasellus nec condimentum ex. Praesent erat est, interdum sit amet gravida eu, interdum et nisi. Nulla non turpis vel sapien aliquet elementum et quis sapien. Proin orci purus, molestie et malesuada quis, pharetra nec ligula. Curabitur aliquam velit ut sapien euismod, non euismod mi malesuada. Phasellus quis ipsum a libero tincidunt euismod at eget lacus. Vestibulum laoreet mattis fringilla. Donec lobortis ultrices risus, ac suscipit quam malesuada ac. Nulla facilisi. Etiam hendrerit a turpis eget ultricies. Quisque iaculis dapibus consequat. Nunc pulvinar gravida diam, eget semper sapien placerat non. Phasellus euismod ipsum ut feugiat congue.
                    </p>
                    <p>
                        Etiam dapibus tellus at ultrices tempus. Phasellus sagittis lobortis diam, non interdum nibh interdum ut. Vestibulum sollicitudin in enim at mattis. Nullam quis odio et quam malesuada tincidunt. Suspendisse at tortor et libero eleifend blandit in consectetur metus. Praesent quis elit nibh. Duis quis tortor vel neque fermentum porta.
                    </p>
                    <p>
                        Fusce fringilla dui est, ac pharetra quam euismod vitae. Nulla vehicula magna tortor, id blandit libero mollis ac. Pellentesque convallis lacus eu leo hendrerit, ac sollicitudin lectus blandit. Pellentesque et erat laoreet, mattis est ut, luctus est. Maecenas eget risus lacinia, hendrerit arcu vel, aliquam dolor. Maecenas molestie ullamcorper felis at tincidunt. Suspendisse lacinia lorem id ipsum suscipit, ac tristique turpis malesuada. Curabitur ac ex at orci molestie condimentum. Donec suscipit sagittis faucibus. Praesent eleifend eleifend justo, sed accumsan sem ultricies non. Cras eu interdum lorem, dignissim commodo purus.
                    </p>
                    <p>
                        Vestibulum volutpat cursus elit, id vehicula nunc aliquet nec. Duis vestibulum massa quis nunc mattis, sit amet vulputate quam congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam a elit nisi. Vestibulum pretium interdum accumsan. Nulla condimentum magna vitae varius gravida. Donec pellentesque lacinia nulla, eleifend pellentesque nisl viverra vitae. Phasellus aliquam erat et rhoncus consequat. Quisque cursus arcu at massa facilisis, eu tincidunt erat vestibulum. Suspendisse pretium convallis sem eu ullamcorper. Ut justo mauris, vestibulum in sem nec, blandit dictum urna.
                    </p>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In commodo, purus vitae tempor tristique, massa odio mattis purus, sit amet elementum lectus metus vel diam. Phasellus nec condimentum ex. Praesent erat est, interdum sit amet gravida eu, interdum et nisi. Nulla non turpis vel sapien aliquet elementum et quis sapien. Proin orci purus, molestie et malesuada quis, pharetra nec ligula. Curabitur aliquam velit ut sapien euismod, non euismod mi malesuada. Phasellus quis ipsum a libero tincidunt euismod at eget lacus. Vestibulum laoreet mattis fringilla. Donec lobortis ultrices risus, ac suscipit quam malesuada ac. Nulla facilisi. Etiam hendrerit a turpis eget ultricies. Quisque iaculis dapibus consequat. Nunc pulvinar gravida diam, eget semper sapien placerat non. Phasellus euismod ipsum ut feugiat congue.
                    </p>
                    <p>
                        Etiam dapibus tellus at ultrices tempus. Phasellus sagittis lobortis diam, non interdum nibh interdum ut. Vestibulum sollicitudin in enim at mattis. Nullam quis odio et quam malesuada tincidunt. Suspendisse at tortor et libero eleifend blandit in consectetur metus. Praesent quis elit nibh. Duis quis tortor vel neque fermentum porta.
                    </p>
                    <p>
                        Fusce fringilla dui est, ac pharetra quam euismod vitae. Nulla vehicula magna tortor, id blandit libero mollis ac. Pellentesque convallis lacus eu leo hendrerit, ac sollicitudin lectus blandit. Pellentesque et erat laoreet, mattis est ut, luctus est. Maecenas eget risus lacinia, hendrerit arcu vel, aliquam dolor. Maecenas molestie ullamcorper felis at tincidunt. Suspendisse lacinia lorem id ipsum suscipit, ac tristique turpis malesuada. Curabitur ac ex at orci molestie condimentum. Donec suscipit sagittis faucibus. Praesent eleifend eleifend justo, sed accumsan sem ultricies non. Cras eu interdum lorem, dignissim commodo purus.
                    </p>
                    <p>
                        Vestibulum volutpat cursus elit, id vehicula nunc aliquet nec. Duis vestibulum massa quis nunc mattis, sit amet vulputate quam congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam a elit nisi. Vestibulum pretium interdum accumsan. Nulla condimentum magna vitae varius gravida. Donec pellentesque lacinia nulla, eleifend pellentesque nisl viverra vitae. Phasellus aliquam erat et rhoncus consequat. Quisque cursus arcu at massa facilisis, eu tincidunt erat vestibulum. Suspendisse pretium convallis sem eu ullamcorper. Ut justo mauris, vestibulum in sem nec, blandit dictum urna.
                    </p>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In commodo, purus vitae tempor tristique, massa odio mattis purus, sit amet elementum lectus metus vel diam. Phasellus nec condimentum ex. Praesent erat est, interdum sit amet gravida eu, interdum et nisi. Nulla non turpis vel sapien aliquet elementum et quis sapien. Proin orci purus, molestie et malesuada quis, pharetra nec ligula. Curabitur aliquam velit ut sapien euismod, non euismod mi malesuada. Phasellus quis ipsum a libero tincidunt euismod at eget lacus. Vestibulum laoreet mattis fringilla. Donec lobortis ultrices risus, ac suscipit quam malesuada ac. Nulla facilisi. Etiam hendrerit a turpis eget ultricies. Quisque iaculis dapibus consequat. Nunc pulvinar gravida diam, eget semper sapien placerat non. Phasellus euismod ipsum ut feugiat congue.
                    </p>
                    <p>
                        Etiam dapibus tellus at ultrices tempus. Phasellus sagittis lobortis diam, non interdum nibh interdum ut. Vestibulum sollicitudin in enim at mattis. Nullam quis odio et quam malesuada tincidunt. Suspendisse at tortor et libero eleifend blandit in consectetur metus. Praesent quis elit nibh. Duis quis tortor vel neque fermentum porta.
                    </p>
                    <p>
                        Fusce fringilla dui est, ac pharetra quam euismod vitae. Nulla vehicula magna tortor, id blandit libero mollis ac. Pellentesque convallis lacus eu leo hendrerit, ac sollicitudin lectus blandit. Pellentesque et erat laoreet, mattis est ut, luctus est. Maecenas eget risus lacinia, hendrerit arcu vel, aliquam dolor. Maecenas molestie ullamcorper felis at tincidunt. Suspendisse lacinia lorem id ipsum suscipit, ac tristique turpis malesuada. Curabitur ac ex at orci molestie condimentum. Donec suscipit sagittis faucibus. Praesent eleifend eleifend justo, sed accumsan sem ultricies non. Cras eu interdum lorem, dignissim commodo purus.
                    </p>
                    <p>
                        Vestibulum volutpat cursus elit, id vehicula nunc aliquet nec. Duis vestibulum massa quis nunc mattis, sit amet vulputate quam congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam a elit nisi. Vestibulum pretium interdum accumsan. Nulla condimentum magna vitae varius gravida. Donec pellentesque lacinia nulla, eleifend pellentesque nisl viverra vitae. Phasellus aliquam erat et rhoncus consequat. Quisque cursus arcu at massa facilisis, eu tincidunt erat vestibulum. Suspendisse pretium convallis sem eu ullamcorper. Ut justo mauris, vestibulum in sem nec, blandit dictum urna.
                    </p>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In commodo, purus vitae tempor tristique, massa odio mattis purus, sit amet elementum lectus metus vel diam. Phasellus nec condimentum ex. Praesent erat est, interdum sit amet gravida eu, interdum et nisi. Nulla non turpis vel sapien aliquet elementum et quis sapien. Proin orci purus, molestie et malesuada quis, pharetra nec ligula. Curabitur aliquam velit ut sapien euismod, non euismod mi malesuada. Phasellus quis ipsum a libero tincidunt euismod at eget lacus. Vestibulum laoreet mattis fringilla. Donec lobortis ultrices risus, ac suscipit quam malesuada ac. Nulla facilisi. Etiam hendrerit a turpis eget ultricies. Quisque iaculis dapibus consequat. Nunc pulvinar gravida diam, eget semper sapien placerat non. Phasellus euismod ipsum ut feugiat congue.
                    </p>
                    <p>
                        Etiam dapibus tellus at ultrices tempus. Phasellus sagittis lobortis diam, non interdum nibh interdum ut. Vestibulum sollicitudin in enim at mattis. Nullam quis odio et quam malesuada tincidunt. Suspendisse at tortor et libero eleifend blandit in consectetur metus. Praesent quis elit nibh. Duis quis tortor vel neque fermentum porta.
                    </p>
                    <p>
                        Fusce fringilla dui est, ac pharetra quam euismod vitae. Nulla vehicula magna tortor, id blandit libero mollis ac. Pellentesque convallis lacus eu leo hendrerit, ac sollicitudin lectus blandit. Pellentesque et erat laoreet, mattis est ut, luctus est. Maecenas eget risus lacinia, hendrerit arcu vel, aliquam dolor. Maecenas molestie ullamcorper felis at tincidunt. Suspendisse lacinia lorem id ipsum suscipit, ac tristique turpis malesuada. Curabitur ac ex at orci molestie condimentum. Donec suscipit sagittis faucibus. Praesent eleifend eleifend justo, sed accumsan sem ultricies non. Cras eu interdum lorem, dignissim commodo purus.
                    </p>
                    <p>
                        Vestibulum volutpat cursus elit, id vehicula nunc aliquet nec. Duis vestibulum massa quis nunc mattis, sit amet vulputate quam congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam a elit nisi. Vestibulum pretium interdum accumsan. Nulla condimentum magna vitae varius gravida. Donec pellentesque lacinia nulla, eleifend pellentesque nisl viverra vitae. Phasellus aliquam erat et rhoncus consequat. Quisque cursus arcu at massa facilisis, eu tincidunt erat vestibulum. Suspendisse pretium convallis sem eu ullamcorper. Ut justo mauris, vestibulum in sem nec, blandit dictum urna.
                    </p>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In commodo, purus vitae tempor tristique, massa odio mattis purus, sit amet elementum lectus metus vel diam. Phasellus nec condimentum ex. Praesent erat est, interdum sit amet gravida eu, interdum et nisi. Nulla non turpis vel sapien aliquet elementum et quis sapien. Proin orci purus, molestie et malesuada quis, pharetra nec ligula. Curabitur aliquam velit ut sapien euismod, non euismod mi malesuada. Phasellus quis ipsum a libero tincidunt euismod at eget lacus. Vestibulum laoreet mattis fringilla. Donec lobortis ultrices risus, ac suscipit quam malesuada ac. Nulla facilisi. Etiam hendrerit a turpis eget ultricies. Quisque iaculis dapibus consequat. Nunc pulvinar gravida diam, eget semper sapien placerat non. Phasellus euismod ipsum ut feugiat congue.
                    </p>
                    <p>
                        Etiam dapibus tellus at ultrices tempus. Phasellus sagittis lobortis diam, non interdum nibh interdum ut. Vestibulum sollicitudin in enim at mattis. Nullam quis odio et quam malesuada tincidunt. Suspendisse at tortor et libero eleifend blandit in consectetur metus. Praesent quis elit nibh. Duis quis tortor vel neque fermentum porta.
                    </p>
                    <p>
                        Fusce fringilla dui est, ac pharetra quam euismod vitae. Nulla vehicula magna tortor, id blandit libero mollis ac. Pellentesque convallis lacus eu leo hendrerit, ac sollicitudin lectus blandit. Pellentesque et erat laoreet, mattis est ut, luctus est. Maecenas eget risus lacinia, hendrerit arcu vel, aliquam dolor. Maecenas molestie ullamcorper felis at tincidunt. Suspendisse lacinia lorem id ipsum suscipit, ac tristique turpis malesuada. Curabitur ac ex at orci molestie condimentum. Donec suscipit sagittis faucibus. Praesent eleifend eleifend justo, sed accumsan sem ultricies non. Cras eu interdum lorem, dignissim commodo purus.
                    </p>
                </div>
            </div>
        );
    }
}

export default Header;
