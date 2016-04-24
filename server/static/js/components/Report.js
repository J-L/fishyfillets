/**
 * Created by shu on 2016-04-23.
 */
import React from 'react';
import { Link, browserHistory } from 'react-router';
import client from '../utils/Client';

class Report extends React.Component {

    onClick() {
        this.props.history.push('/static/index.html#/distributors');
    }

    render() {
        return (
            <div>
                <label>Distributor/Seller Name</label>
                <input></input>
                <label>Additional Details</label>
                <input/>
                <button onClick={this.onClick.bind(this)}>Submit</button>
            </div>
        )
    }

}

export default Report;