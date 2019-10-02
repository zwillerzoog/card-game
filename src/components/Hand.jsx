import React from 'react';
import {connect} from 'react-redux';
// import {Hand} from "./Cards";

const Hand = (cards) => {
    return (
        <div>
            <div className='hand' onClick={e => this.addCard(e)}>
                {this.props.hand.map(i => {
                    return (
                        <span key={i} className='card' onClick={(e) => this.selectCard(e, i)}>
                                     <div>{this.props.values[i]}</div>
                                    <p>{i}</p>
                                </span>)
                })}
            </div>

            <div className="word" onClick={e => this.addCard(e)}>
                {this.props.word.map((a, b) => (
                        <span key={a} onClick={(e) => this.selectCard(e, a)}>
                    <div>{this.props.values[a]}</div>
                            {this.props.word[b] === ' ' ? <button className="deleteButton">delete space</button> :
                                <p>{a}</p>}
                </span>)
                )}
            </div>
        </div>
    )
};


export default Hand;
