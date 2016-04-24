/**
 * Created by shu on 2016-04-23.
 */
import React from 'react';

class FishStatRow extends React.Component {

    render() {
        return (
            <div className="row" style={{fontSize: "24px", marginBottom: "20px"}}>
                <div className="col-xs-4">{this.props.propname}</div>
                <div className="col-xs-8">{this.props.value}</div>
            </div>);

    }
}

export default FishStatRow;