/**
 * Created by shu on 2016-04-22.
 */
import React from 'react';
import { Link } from 'react-router';
import client from '../utils/Client';
import SearchBar from './SearchBar';

class Search extends React.Component {

    autoComplete(searchTerm, cb) {
        let suggestions = [];
        client.search(searchTerm, (json) => {
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

            cb(suggestions);
        });
    }

    render() {
        return (
            <div>
                <h1>Look up fish or distributors/sellers</h1>
                <SearchBar placeholder="Yellowfin Tuna" autoComplete={this.autoComplete.bind(this)} />
            </div>
        )
    }

}

export default Search;