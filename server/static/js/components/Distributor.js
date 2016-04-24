/**
 * Created by shu on 2016-04-23.
 */
import React from 'react';
import client from '../utils/Client';
import moment from 'moment';

class Distributor extends React.Component {

    constructor() {
        super();

        this.state = {
            distributor: null,
            reports: null,
            waitingForReports: true
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
                reports: resp,
                waitingForReports: false
            });
        });
    }

    _renderReports() {
        if (!this.state.reports || this.state.reports.length < 0) {
            return <h2>No Fraud Reports Found</h2>
        }

        return (
            <div>
                <h2>{this.state.reports.length} Fraud Reports Found</h2>
                {
                    this.state.reports.map((report, idx) => {
                        return (
                            <div key={idx}>
                                {moment(report.createdAt).format("MMM Do YYYY")}
                                <span className="glyphicon glyphicon-link" />
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    render() {
        if (!this.state.distributor || this.state.waitingForReports) {
            return <h3>Loading...</h3>
        }
        return (
            <div>
                <h1 className="text-center">{this.state.distributor.name}</h1>
                <h2 className="text-center">{this.state.distributor.product}</h2>
                <hr style={{'marginTop': '50px'}} />
                <div style={{'marginTop': '50px'}}>
                    {this.state.distributor.location && <div>Location: {this.state.distributor.location}</div>}
                    {this.state.distributor.email && <div>Email: {this.state.distributor.email}</div>}
                    {this.state.distributor.phone && <div>Phone: {this.state.distributor.phone}</div>}
                </div>
                <hr style={{'marginTop': '50px'}} />
                {this._renderReports()}
            </div>
        )
    }

}

export default Distributor;