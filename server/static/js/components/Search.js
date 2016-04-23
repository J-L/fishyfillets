/**
 * Created by shu on 2016-04-22.
 */
import React from 'react';
import { Link } from 'react-router'


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
                        <Link className="searchResult" key={'f_' + fish.id} to={`/fish/${fish.id}`}>
                            <span className="name">{fish.name}</span>
                            <span className="type">Fish</span>
                        </Link>
                    );
                });

                json.matchedDistributors.forEach(function(distributor) {
                    suggestions.push(
                        <Link className="searchResult" key={'d_' + distributor.id} to={`/distributor/${distributor.id}`}>
                            <span className="name">{distributor.name}</span>
                            <span className="type">Distributor</span>
                        </Link>
                    );
                });

                if (suggestions.length == 0) {
                    suggestions.push(
                        <div className="searchResult">
                            <span className="name">No Results</span>
                        </div>
                    );
                }

                this.setState({suggestions: suggestions});
            });
        });
    }

    render() {
        return (
            <div>
                <input className="searchInput"
                       type="text"
                       placeholder="Yellowfin Tuna"
                       onChange={this.onChange.bind(this)}
                       value={this.state.value}/>
                {!!this.state.suggestions && this.state.suggestions}
            </div>
        )
    }

}

export default Search;