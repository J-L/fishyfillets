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
            error: null
        };
    }

    componentDidMount() {
        client.getFish(this.props.params.id, (resp) => {
            this.setState({
                fish: resp
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
                <br/>
                <center><img  src="/static/img/preview/pngs/Kajikia audax.png" height="400"/></center>
                <br/>
                <h1>{this.state.fish.name}</h1>
                <h3>{this.state.fish.mislabelFrequency} Mislabeled</h3>
                <span>{this.state.fish.description}</span>
                <hr />

                <h2>Commonly Mislabeled As {this.state.fish.name}</h2>
                <div className="row">
                {this._renderConfusedFishes(this.state.fish.confusedFishes)}
                </div>
            </div>
        )
    }

    _renderConfusedFishes(confusedFishes) {
        console.log('fish._renderConfusedFishes', this.state);
        if (!confusedFishes || confusedFishes.length == 0) {
            return <span>No Results</span>
        }

        return confusedFishes.map((fish, idx) => {
           return (

            <div className="col-xs-6">
                <center>
                <img src="/static/img/preview/pngs/Kajikia audax.png" height="200"/>
               <Link to={`/fish/${this.state.fish.id}/compare/${fish.id}`} key={idx} className="confusedFish">
                   <span>{fish.name}</span>
               </Link>
               </center>

            </div>
           )
        });
    }

}

export default Fish;