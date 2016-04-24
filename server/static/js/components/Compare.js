/**
 * Created by shu on 2016-04-23.
 */
import React from 'react';
import { Link } from 'react-router';
import client from '../utils/Client';

class Compare extends React.Component {

    constructor() {
        super();

        this.state = {
            fish1: null,
            fish2: null
        }
    }

    componentDidMount() {
        console.log(this.props);
        client.getFish(this.props.params.fish1, (resp) => {
            this.setState({
                fish1: resp
            });
        });

        client.getFish(this.props.params.fish2, (resp) => {
            this.setState({
                fish2: resp
            });
        });
    }

    render() {
        if (!this.state.fish1 || !this.state.fish2) {
            return <h1>Loading ...</h1>
        }

        return (
            <div>
                <h1>Compare Fishes</h1>
                <div className="row">
                    <div className="col-xs-6">
                        <h3>{this.state.fish1.name}</h3>
                        <div className="imageContainer"><img  src={this.state.fish1.thumbnail} /></div>
                        <div>{this.state.fish1.description}</div>
                    </div>
                    <div className="col-xs-6">
                        <h3>{this.state.fish2.name}</h3>
                        <img src={this.state.fish2.thumbnail} />
                        <div>{this.state.fish2.description}</div>
                    </div>
                </div>

                <h1>Suspect Something?</h1>
                <Link className="reportLink" to={"/report/" + this.state.fish1.id + "/" + this.state.fish2.id} >
                    <div>Report</div>
                </Link>
            </div>);
    }

}

export default Compare;