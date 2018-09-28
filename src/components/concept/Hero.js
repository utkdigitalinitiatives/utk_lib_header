import React, {Component} from 'react';

export class Hero extends Component {

    constructor(props) {
        super(props);
    };

    render() {

        const {shortcut, stickyMenu} = this.props;

        let headerHero = '';
        if (shortcut === true) {
            headerHero = ' utk-hero-shrink';
        }

        let stickyMenuClass = '';
        if (stickyMenu === true) {
            stickyMenuClass = ' utk-menu-sticky';
        }

        return (
            <div className={`utk-hero${headerHero}${stickyMenuClass}`}>
                <span>Hero</span>
                <div className='utk-hero-overlay'></div>
                <div className="utk-title-row">
                    <div className="utk-container">
                        <div className="utk-title-wrap">
                            <h2 className="utk-title-text">Subsite Header</h2>
                        </div>
                        <div className='utk-menu-help-hero'>
                            <div className='utk-menu-help'>
                                <a className="utk-menu-help--item utk-menu-help--chat">
                                    <h4>Chat</h4>
                                    <div className="utk-menu-help--item--icon">
                                        <span className="icon-chat"></span>
                                    </div>
                                </a>
                                <a className="utk-menu-help--item utk-menu-help--help-me">
                                    <h4>Help Me<em>...</em></h4>
                                    <div className="utk-menu-help--item--icon">
                                        <span className="icon-chat"></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}