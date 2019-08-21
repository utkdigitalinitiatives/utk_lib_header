import React, {Component} from 'react';
import TagManager from 'react-gtm-module'

const searchEndpoint = "https://www.lib.utk.edu/search/submit?go=1"
// const searchEndpointDebug = "https://utklibrary.test/search/submit?go=1"

export class SearchForm extends Component {

    constructor (props) {
        super(props);
        this.state = {
            searchValue: ' ',
        };
    }

    handleInputChange = (e) => {
        this.setState({
            searchValue: e.target.value
        })

        const tagManagerArgs = {
            gtmId: 'GTM-MB99NS',
            dataLayer: {
                searchValue: e.target.value,
                searchMethod: this.props.option,
            }
        }

        TagManager.initialize(tagManagerArgs)
    };

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
                       className="utk-search-wrapper--form-item--value"
                       type="text"
                       name="value"
                       ref={inputRef}
                       placeholder={placeholder}
                       onChange={e => this.handleInputChange(e)}
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
