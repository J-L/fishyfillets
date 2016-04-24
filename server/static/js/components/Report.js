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
            distributor: null,
            details: ''
        }
    }

    onClick() {
        if (!this.state.distributor) {
            window.alert('Please fill in distributor info.');
        }
        client.createReport({
            distributorId: this.state.distributor.id,
            soldAs: this.props.params.fish1,
            mislabeledFish: this.props.params.fish2,
            details: this.state.details
        }, () => this.props.history.push('/static/index.html#/distributors'));
    }

    onSelectDistributor(distributor) {
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

    onDetailsUpdate(e) {
        this.setState({details: e.target.value});
    }

    render() {
        return (
            <div>
                <label>Distributor/Seller</label>
                {!!this.state.distributor
                    ? <div onClick={() => this.setState({distributor: null})} className="name">{this.state.distributor.name}</div>
                    : <SearchBar placeholder="Sunshine Distributors" autoComplete={this.autoComplete.bind(this)} />}
                <label>Additional Details</label>
                <input type="text" onChange={this.onDetailsUpdate.bind(this)} value={this.state.details} />
                <button onClick={this.onClick.bind(this)}>Submit</button>
            </div>
        )
    }

}

export default Report;