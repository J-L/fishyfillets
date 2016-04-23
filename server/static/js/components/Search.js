/**
 * Created by shu on 2016-04-22.
 */
import React from 'react';

const minCharsBeforeAutoComplete = 2;

class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            value: '',
            suggestions: []
        };
    }

    normalizeInput() {
        return this.state.value.toLowerCase().trim();
    }

    onChange(e) {
        clearTimeout(this._timerId);
        this.setState({value: e.target.value});

        let searchTerm = this.normalizeInput();
        if (!searchTerm || searchTerm.length < minCharsBeforeAutoComplete) return;

        this._timerId = setTimeout(() => this._updateSuggestions(searchTerm));
    }

    _updateSuggestions(searchTerm) {
        let suggestions = [];
        fetch('/search?term=' + searchTerm).then((response) => {
            response.json().then((json) => {
                json.matchedFishes.forEach(function(fish) {
                    suggestions.push(
                        <div key={fish.id}>{fish.id}, {fish.name}</div>
                    );
                });
                this.setState({suggestions: suggestions});
            });
        });
    }

    render() {
        return (
            <div>
                <input type="text"
                       placeholder="Yellowfin Tuna"
                       onChange={this.onChange.bind(this)}
                       value={this.state.value}/>
                {!!this.state.suggestions && this.state.suggestions}
            </div>
        )
    }

}

export default Search;