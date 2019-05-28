import React, {Component} from 'react';

export class SearchForm extends Component {

    constructor (props) {
        super(props);
    }

    handleSubmit = (event) => {
        console.log(event)
        // event.preventDefault();
        // this.setState({ companyName: '' });
    };

    render () {
        const {inputRef, placeholder, label, option} = this.props

        return (
            <form className="utk-search-wrapper--form-item"
                  onSubmit={this.handleSubmit.bind(this)}>
                <span className="utk-search-wrapper--form-item--icon">
                    <span className="icon-search"></span>
                </span>
                <input id="utk-search-input"
                       type="text"
                       ref={inputRef}
                       placeholder={placeholder}
                       aria-label={label}/>
                <input id="utk-search-method"
                       type="hidden"
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
