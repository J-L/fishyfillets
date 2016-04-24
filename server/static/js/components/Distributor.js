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
                <h1>{this.state.distributor.name}</h1>
            </div>
        )
    }

}

export default Distributor;