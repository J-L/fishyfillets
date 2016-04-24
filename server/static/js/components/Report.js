/**
 * Created by shu on 2016-04-23.
 */
import React from 'react';
import { Link, browserHistory } from 'react-router';
import client from '../utils/Client';
import SearchBar from './SearchBar';

class Report extends React.Component {

    constructor() {
        super();
        this.state = {
            distributor: null
        }
    }

    onClick() {
        this.props.history.push('/static/index.html#/distributors');
    }

    onSelectDistributor(distributor) {
        console.log('distributor selected', distributor);
        this.setState({distributor: distributor});
    }

    autoComplete(searchTerm, cb) {
        let suggestions = [];
        client.search(searchTerm, (json) => {
            json.matchedDistributors.forEach((distributor) => {
                suggestions.push(
                    <div className="name" onClick={() => this.onSelectDistributor(distributor)}>{distributor.name}</div>
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
                <label>Distributor/Seller</label>
                {!!this.state.distributor
                    ? <div onClick={() => this.setState({distributor: null})} className="name">{this.state.distributor.name}</div>
                    : <SearchBar placeholder="Sunshine Distributors" autoComplete={this.autoComplete.bind(this)} />}
                <label>Additional Details</label>
                <input/>
                <button onClick={this.onClick.bind(this)}>Submit</button>
            </div>
        )
    }

}

export default Report;