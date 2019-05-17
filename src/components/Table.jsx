import React from 'react';
import {connect} from 'react-redux';

export class Hand extends React.Component {
    render() {
        console.log(this.props)
        const span = {
            border: "2px solid gray",
            borderRadius: 5,
            padding: "30px 20px",
            margin: 5,
            fontSize: 40,
        };

        const div = {
            position:"absolute",
            width: '100%',
            bottom: "20%",
            display: "flex",
            justifyContent: "center"
        };

        return (
            <div style={div}>
                <span style={span}>{this.props.hand[0]}</span>
                <span style={span}>{this.props.hand[1]}</span>
                <span style={span}>{this.props.hand[2]}</span>
            </div>

        )
    }
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Hand);