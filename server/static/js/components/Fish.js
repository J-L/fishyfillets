/**
 * Created by shu on 2016-04-22.
 */
import React from 'react';
import { Link } from 'react-router';
import client from '../utils/Client';

class Fish extends React.Component {

    constructor() {
        super();

        this.state = {
            fish: null,
            confusedFishes: [],
            error: null
        };
    }

    componentDidMount() {
        client.getFish(this.props.params.id, (resp) => {
            this.setState({
                fish: resp.fish,
                confusedFishes: resp.confusedFishes
            });
        });
    }

    render() {
        console.log('fish.render', this.state);
        if (this.state.error) {
            return (
                <h3>Error placeholder</h3>
            )
        }

        if (!this.state.fish) {
            return <h3>Loading...</h3>
        }

        return (
            <div>
                <h1>{this.state.fish.name}</h1>
                <h3>{this.state.fish.mislabelFrequency} Mislabeled</h3>
                <span>{this.state.fish.description}</span>
                <hr />

                <h2>Commonly Mislabeled As {this.state.fish.name}</h2>

                {this._renderConfusedFishes()}
            </div>
        )
    }

    _renderConfusedFishes() {
        console.log('fish._renderConfusedFishes', this.state);
        if (!this.state.confusedFishes || this.state.confusedFishes.length == 0) {
            return <span>No Results</span>
        }

        return this.state.confusedFishes.map((fish, idx) => {
           return (
               <Link to={`/fish/${this.state.fish.id}/compare/${fish.id}`} key={idx} className="confusedFish">
                   <span>{fish.name}</span>
               </Link>
           )
        });
    }

}

export default Fish;