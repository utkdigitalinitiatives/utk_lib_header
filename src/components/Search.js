import React, {Component} from 'react';
import primary_logo from "../media/utk-onesearch.svg";

export class Search extends Component {
    render() {

        const {active} = this.props;

        return (
            <div className={`utk-header-search ${active}`}>
                <div className="utk-container">
                    <div className="utk-search-wrapper">
                        <div className="utk-search-options">
                            <label><img src={primary_logo} className="utk-logo" alt="University of Tennessee Libraries" /></label>
                            <div id="utk-search-toggle" className="utk-search-toggle utk-search-toggle-onesearch">
                                <div className="utk-search-toggle-button"></div>
                            </div>
                            <label><span>lib.utk.edu</span></label>
                        </div>
                        <div className="utk-search-wrapper--form-item">
                            <div className="utk-search-wrapper--icon"><span className="icon-search"></span></div>
                            <input id="utk-search-field" placeholder="Ex: Library Hours" />
                            <span className="utk-cursor"></span>
                            <input id="utk-search-submit" type="button" value="Search" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}