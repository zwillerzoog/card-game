import React from 'react';
import {connect} from 'react-redux';
// import {Hand} from "./Cards";

const Hand = ({cards}) => {
    return (
        <div className='hand' onClick={e => this.addCard(e)}>
        { this.props.hand.map(i => {
            return (
                <span key={i} className='card' onClick={(e) => this.selectCard(e, i)}>
                                     <div >{this.props.values[i]}</div>
                                    <p >{i}</p>
                                </span>)
        })}
    </div>
    )
};



export default Hand;
