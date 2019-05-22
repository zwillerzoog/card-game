import React from "react";
import {connect} from "react-redux";
import {Hand} from "./Cards";

const ul = {
    listStyle: "none",
    display: "flex",
    position: "fixed",
    right: 0
};
const li = {
    marginLeft:20,
    marginRight: 20,
    textDecoration: "none",
    color: "white",
    fontWeight: "bolder"
};

class UserNav extends React.Component {
    render () {
        return (
            <ul style={ul}>
                <li style={li}><a style={li} href={'/'}>SCORE: {this.props.score}</a></li>
                <li style={li}><a style={li} href={'/'}>USERNAME</a></li>
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(UserNav);