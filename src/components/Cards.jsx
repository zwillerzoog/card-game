import React from 'react';
import {connect} from 'react-redux';
import '../styles/Cards.css'
import {updateWord, updateHand, deal} from '../actions';
import {randomize, arrayWithout, positionCard} from './Logic';
import {deck} from '../Deck';
import Word from './Word'

export class Hand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hand: randomize(deck, this.props.round),
            word: [],
            discard: [],
            selected: ''
        };
        this.selectCard = this.selectCard.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(deal(this.props.round));
        console.log('state upon mount', this.state)
    }

    selectCard (e, i) {
        let parent = e.target.parentNode.className;
        if (this.state.selected) {
            console.log('oops you already picked')
        } else if (parent === 'hand') {
            console.log('hand')
            this.props.dispatch(updateHand(arrayWithout(this.props.hand, i)));
            this.setState({
                selected:i});
        }
        else if (parent === 'word') {
            console.log('word')
            this.props.dispatch(updateWord(arrayWithout(this.props.word, i)));
            this.setState({
                selected:i});
        }
    }


    addCard (e) {
        let newArr = this.props.word.slice();
        if (this.state.selected) {
            if (e.target.className === 'word') {
                 if (positionCard(e)) {
                     if (positionCard(e) === newArr[0]) {
                         newArr.unshift(this.state.selected)
                     } else {
                         let index = newArr.indexOf(positionCard(e));
                         newArr.splice(index, 0, this.state.selected);
                     }
                } else {
                     newArr.push(this.state.selected)
                }
                 this.props.dispatch(updateWord(newArr));
                this.setState({
                    word: newArr,
                    selected: ''});
            }
            else if (e.target.className === 'hand'){
                this.props.dispatch(updateHand([...this.props.hand, this.state.selected]))
                this.setState({
                    selected: ''
                });
        }

        }
    }

    submit () {
            this.setState({
                hand: randomize(deck, this.props.round),
                left: randomize(deck, this.props.round),
                discard: [],
                word: [],
                selected: ''
            });
            // this.props.dispatch(updateWord(this.state.word));
            this.props.dispatch(deal(this.props.round));

    }

    render() {
        return (
            <div style={{width: "100%", marginTop: "20%"}}>
                <h3>Hand:</h3>
                <div className='hand' onClick={e => this.addCard(e)}>
                    { this.props.hand.map(i => {
                            return (
                                <span key={i} className='card' onClick={(e) => this.selectCard(e, i)}>
                                     <div >{this.props.values[i]}</div>
                                    <p >{i}</p>
                                </span>)

                       })}
                </div>
                <h3>Make a Word:</h3>
                <div className="word" onClick={e => this.addCard(e)}>
                    {this.props.word.map(i => (
                            <span key={i} onClick={(e) => this.selectCard(e, i)}>
                    <div >{this.props.values[i]}</div>
                    <p  >{i}</p>
                </span>)
                    )}
                </div>
                <button onClick={this.submit}>Submit</button>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Hand);