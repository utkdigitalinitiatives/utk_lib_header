import React, {Component} from 'react';

const documentBody = document.body;
const skipFocusClass = 'utk-skip-open'

class Skip extends Component {

    _onFocus () {
        documentBody.classList.add(skipFocusClass);
    }

    _onBlur() {
        documentBody.classList.remove(skipFocusClass);
    }


    render() {
        return (
            <React.Fragment>
                <ul className="container">
                    <li>
                        <a onFocus={this._onFocus.bind(this)}
                           onBlur={this._onBlur.bind(this)}
                           href='#menu'>
                            Skip to Main Menu
                        </a>
                    </li>
                    <li>
                        <a onFocus={this._onFocus.bind(this)}
                           onBlur={this._onBlur.bind(this)}
                           href='#search'>
                            Skip to Search
                        </a>
                    </li>
                    <li>
                        <a onFocus={this._onFocus.bind(this)}
                           onBlur={this._onBlur.bind(this)}
                           href='#main'>
                            Skip to Main Content
                        </a>
                    </li>
                    <li>
                        <a onFocus={this._onFocus.bind(this)}
                           onBlur={this._onBlur.bind(this)}
                           href='#accessibility'>
                            Skip to the Accessibility Link
                        </a>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}

export default Skip;
