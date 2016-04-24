/**
 * Created by shu on 2016-04-22.
 */
import React from 'react';
import { Link } from 'react-router';
import client from '../utils/Client';
import FishStatRow from './FishStatRow';

class Fish extends React.Component {

    constructor() {
        super();

        this.state = {
            fish: null,
            error: null
        };
    }

    componentDidMount() {
        console.log('fuck', this);
        client.getFish(this.props.params.id, (resp) => {
            this.setState({
                fish: resp
            });
        });
    }

    _renderSustainability(sustainability) {
        //if (sustainability == "Red") {
            return <span className="glyphicon glyphicon-exclamation-sign" style={{'color': 'red'}} />
        //}
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
                <center><img className="text-center" src={this.state.fish.thumbnail} height="400"/></center>
                <h1 className="text-center">{this.state.fish.name}</h1>
                {this.state.fish.mislabelFrequency != 'Unknown' && <h2 className="text-center">{this.state.fish.mislabelFrequency + ' Mislabeled'}</h2>}

                <hr style={{'marginTop': '50px'}} />

                <div style={{'marginTop': '50px'}}>
                    {this.state.fish.aliases && <FishStatRow propname="Aliases" value={this.state.fish.aliases} />}
                    {this.state.fish.description && <FishStatRow propname="Description" value={this.state.fish.description} />}
                    {this.state.fish.colour && <FishStatRow propname="Colour" value={this.state.fish.colour} />}
                    {this.state.fish.filletLength && <FishStatRow propname="Fillet Length" value={this.state.fish.filletLength} />}
                    {this.state.fish.filletWeight && <FishStatRow propname="Fillet Weight" value={this.state.fish.aliases} />}
                    {this.state.fish.recommendedConsumptionSize && <FishStatRow propname="Recommended Consumption Size" value={this.state.fish.recommendedConsumptionSize} />}
                    {this.state.fish.sustainability && <FishStatRow propname="Sustainability" value={this._renderSustainability(this.state.fish.sustainability)} />}
                </div>

                <hr style={{'marginTop': '50px'}} />

                <h2>Common Substitutes</h2>
                {this._renderConfusedFishes(this.state.fish.confusedFishes)}
            </div>
        )
    }

    _renderConfusedFishes(confusedFishes) {
        if (!confusedFishes || confusedFishes.length == 0) {
            return <span>No Results</span>
        }

        return confusedFishes.map((fish, idx) => {
           return (
               <Link to={`/fish/${this.state.fish.id}/compare/${fish.id}`} key={idx} className="confusedFish row">
                   <div className="col-xs-6 col-sm-6 col-lg-6">
                        <center><img src={fish.thumbnail} height="200"/></center>
                    </div>
                    <h2 className="col-xs-6 col-xs-6 col-sm-6 col-lg-6">{fish.name}</h2>
               </Link>)
        });
    }

}

export default Fish;