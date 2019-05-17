import React from 'react';
import {connect} from 'react-redux';
import Cards from './Cards';
import Table from './Table';


export class Game extends React.Component {
    render() {
        return (
            <div>
                {/*<Table />*/}
                <Cards />
            </div>

        )
    }
};


const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Game);