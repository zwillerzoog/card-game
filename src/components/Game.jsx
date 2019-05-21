import React from 'react';
import {connect} from 'react-redux';
import Cards from './Cards';
import Table from './Table';
import '../styles/Game.css'

export class Game extends React.Component {
    render() {
        return (
            <div>
                <Cards />

            </div>

        )
    }
};


const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Game);