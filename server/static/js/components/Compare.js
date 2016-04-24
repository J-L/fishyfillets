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
                <div className="row">
                    <div className="col-xs-6">
                        <h1 className="text-center">{this.state.fish1.name}</h1>
                    </div>
                    <div className="col-xs-6">
                        <h1 className="text-center">{this.state.fish2.name}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <img style={{'width': '100%'}} src={this.state.fish1.thumbnail} />
                    </div>
                    <div className="col-xs-6">
                        <img style={{'width': '100%'}} src={this.state.fish2.thumbnail} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <h2 className="text-center">{this.state.fish1.colour}</h2>
                    </div>
                    <div className="col-xs-6">
                        <h2 className="text-center">{this.state.fish2.colour}</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-6">
                        <h2 className="text-center">{this.state.fish1.filletLength}</h2>
                    </div>
                    <div className="col-xs-6">
                        <h2 className="text-center">{this.state.fish2.filletLength}</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-6">
                        <h2 className="text-center">{this.state.fish1.filletWeight}</h2>
                    </div>
                    <div className="col-xs-6">
                        <h2 className="text-center">{this.state.fish2.filletWeight}</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-6">
                        <h2 className="text-center">{this.state.fish1.value + ' Colón'}</h2>
                    </div>
                    <div className="col-xs-6">
                        <h2 className="text-center">{this.state.fish2.value + ' Colón'}</h2>
                    </div>
                </div>

                <hr style={{'marginTop': '50px'}} />

                <h1 className="text-center">Suspect Something?</h1>
                <Link className="reportLink text-center" to={"/report/" + this.state.fish1.id + "/" + this.state.fish2.id} >
                    <div>Report</div>
                </Link>
            </div>);
    }

}

export default Compare;