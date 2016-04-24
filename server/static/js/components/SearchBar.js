/**
 * Created by shu on 2016-04-23.
 */
import React from 'react';

class SearchBar extends React.Component {

    constructor() {
        super();
        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange(e) {
        clearTimeout(this._timerId);
        this.setState({value: e.target.value});

        let searchTerm = e.target.value.toLowerCase().trim();
        if (!searchTerm || searchTerm.length < this.props.minCharsBeforeAutoComplete) return;

        this._timerId = setTimeout(() => this.props.autoComplete(searchTerm, (suggestions) => {
            this.setState({suggestions: suggestions});
        }));
    }

    render() {
        return (
            <div>
                <input className="searchInput"
                       type="text"
                       placeholder={this.props.placeholder}
                       onChange={this.onChange.bind(this)}
                       value={this.state.value}/>
                {!!this.state.suggestions && this.state.suggestions}
            </div>);
    }
}

SearchBar.propTypes = {
    placeholder: React.PropTypes.string,
    minCharsBeforeAutoComplete: React.PropTypes.number,
    autoComplete: React.PropTypes.func.isRequired
};

SearchBar.defaultProps = {
    minCharsBeforeAutoComplete: 3,
    placeholder: ''
};

export default SearchBar;