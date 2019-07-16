import React, {Component} from 'react';

const searchEndpoint = "https://www.lib.utk.edu/search/submit?go=1"

export class SearchForm extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        const {inputRef, placeholder, label, option} = this.props

        return (
            <form className="utk-search-wrapper--form-item"
                  method="post"
                  action={searchEndpoint}>
                <span className="utk-search-wrapper--form-item--icon">
                    <span className="icon-search"></span>
                </span>
                <input id="utk-search-input"
                       type="text"
                       name="value"
                       ref={inputRef}
                       placeholder={placeholder}
                       aria-label={label}/>
                <input id="utk-search-method"
                       type="hidden"
                       name="method"
                       value={option}
                       aria-label={option}/>
                <button id="utk-search-submit"
                        type="submit"
                        aria-label="Submit search">
                    Submit
                </button>
            </form>
        )
    }

}
