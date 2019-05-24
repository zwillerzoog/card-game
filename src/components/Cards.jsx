import React from 'react';
import {connect} from 'react-redux';
import '../styles/Cards.css'
import {updateWord, updateHand, deal, submitScore, selected, displayP, discard} from '../actions';
import {randomize, arrayWithout, positionCard, wordScore} from './Logic';
import {deck} from '../Deck';
import Hand from './Hand'

export class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.dispatch(deal(this.props.round));
        console.log('state upon mount', this.props)
    }

    displayP () {
        if (this.props.displayP) {
            this.props.dispatch(displayP(false))
        } else {
            this.props.dispatch(displayP(true))
        }
    }

    selectCard (e, i) {
        let parent = e.target.parentNode.className;
        if (this.props.selected) {
            console.log('oops you already picked')
        } else if (parent === 'hand') {
            this.props.dispatch(updateHand(arrayWithout(this.props.hand, i)));
            this.props.dispatch(selected(i))
        }
        else if (parent === 'word') {
            this.props.dispatch(updateWord(arrayWithout(this.props.word, i)));
            this.props.dispatch(selected(i))
        }
    }

    newCard () {
        if (this.props.selected === '' || this.props.selected === ' ') {
            console.log('ya girl cheatin');
        } else {
            let newLetter = randomize(deck, 1)
            let newArr = this.props.hand.slice();
            newArr.push(newLetter);
            this.props.dispatch(discard('', this.props.discardCount + 1, newArr));
            return newArr;
        }

    }

    addCard (e) {
        let newArr = this.props.word.slice();
        if (this.props.selected) {
            if (e.target.className === 'word') {
                 if (positionCard(e)) {
                     if (positionCard(e) === newArr[0]) {
                         newArr.unshift(this.props.selected)
                     } else {
                         let index = newArr.indexOf(positionCard(e));
                         newArr.splice(index, 0, this.props.selected);
                     }
                } else {
                     newArr.push(this.props.selected)
                }
                this.props.dispatch(updateWord(newArr));
                this.props.dispatch(selected(''))
            }
            else if (e.target.className === 'hand'){
                this.props.dispatch(updateHand([...this.props.hand, this.props.selected]));
                this.props.dispatch(selected(''))
        }
        }
    }

    addSpace (e) {
        let newArr = this.props.word.slice();
        newArr.push(' ');
        this.props.dispatch(updateWord(newArr))
    }

    submit () {
        let empty = [];
            this.props.dispatch(submitScore(wordScore(this.props.word), this.props.discardCount));
            this.props.dispatch(updateHand(randomize(deck, this.props.round)));
            this.props.dispatch(updateWord(empty));
            this.props.dispatch(deal(this.props.round));
    }

    render() {
        let selected;
        if (this.props.selected === ' ') {
           selected = "You selected a space";
        } else if (this.props.selected === '') {
            selected = "Select a letter!";
        } else {
            selected = this.props.selected + ' is the letter you picked!';
        }

        return (
            <div style={{marginTop: '15%', marginLeft: '15%', marginRight: '15%'}}>

                <p className="selectedDisplay">{selected}</p>
                {/*<Hand word={this.props.word}/>*/}
                <h3>Make a Word:</h3>
                <button onClick={e => this.addSpace(e)}>Add a Space</button>
                <div className="word" onClick={e => this.addCard(e)}>
                    {this.props.word.map((a,b) => (
                            <span key={a} onClick={(e) => this.selectCard(e, a)}>
                    <div >{this.props.values[a]}</div>
                   {this.props.word[b] === ' ' ? <button className="deleteButton">delete space</button> : <p>{a}</p>}
                </span>)
                    )}
                </div>

                <button onClick={this.submit} className="submit">Submit</button>

                <h3>Hand:</h3>
                <button onClick={e => this.newCard(e)} onMouseEnter={this.displayP} onMouseLeave={this.displayP}>Discard</button>
                { this.props.displayP && <p style={{display: 'inline'}}>  You lose one point each time you discard</p> }

                <div className='hand' onClick={e => this.addCard(e)}>
                    { this.props.hand.map(i => {
                        return (
                            <span key={i} className='card' onClick={(e) => this.selectCard(e, i)}>
                                     <div >{this.props.values[i]}</div>
                                    <p >{i}</p>
                                </span>)
                    })}
                </div>


            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateHand: (arr) => {dispatch(updateHand(arr))},
        updateWord: (arr) => {dispatch(updateWord(arr))},
        submitScore,
        deal
    }

};

export default connect(mapStateToProps)(Cards);