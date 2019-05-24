import React from "react";
import {connect} from "react-redux";
import {Hand} from "./Cards";
import '../styles/UserNav.css';

class UserNav extends React.Component {
    render () {
        return (
            <ul className='userNav'>
                <li><a href={'/'}>SCORE: {this.props.score}</a></li>
                {/*<li><a href={'/'}>USERNAME</a></li>*/}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(UserNav);