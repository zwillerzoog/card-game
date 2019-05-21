import React from 'react';
import {connect} from 'react-redux';
import {Hand} from "./Cards";

class Empty extends React.Component{


    render() {
        return(

        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Empty);