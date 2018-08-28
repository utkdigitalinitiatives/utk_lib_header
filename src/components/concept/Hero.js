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
                <div className="utk-title-row">
                    <div className="utk-container">
                        <h2 className="utk-title-text">Page Header</h2>
                    </div>
                </div>
            </div>
        )
    }
}