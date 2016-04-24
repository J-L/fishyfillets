/**
 * Created by shu on 2016-04-23.
 */
import React from 'react';
import client from '../utils/Client';

class Distributor extends React.Component {

    constructor() {
        super();

        this.state = {
            distributor: null,
            reports: null
        }
    }

    componentDidMount() {
        client.getDistributor(this.props.params.id, (resp) => {
            this.setState({
                distributor: resp
            });
        });

        client.getReports(this.props.params.id, (resp) => {
            this.setState({
                reports: resp
            });
        });
    }

    render() {
        if (!this.state.distributor) {
            return <h3>Loading...</h3>
        }
        return (
            <div>
                <h1 className="text-center">{this.state.distributor.name}</h1>
                <h2 className="text-center">{this.state.distributor.product}</h2>
                <hr style={{'margin-top': '50px'}} />
                <div style={{'margin-top': '50px'}}>
                    {this.state.distributor.location && <div>Location: {this.state.distributor.location}</div>}
                    {this.state.distributor.email && <div>Email: {this.state.distributor.email}</div>}
                    {this.state.distributor.phone && <div>Phone: {this.state.distributor.phone}</div>}
                </div>
                <hr style={{'margin-top': '50px'}} />
            </div>
        )
    }

}

export default Distributor;