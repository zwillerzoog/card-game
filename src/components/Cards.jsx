import React from 'react';
import {connect} from 'react-redux';
import '../styles/Cards.css'
import {submitWord, deal} from '../actions';
import {deck} from '../Deck';

export class Hand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hand: this.randomize(deck, this.props.round),
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

    randomize (array, times) {
        let newArr = [];
        let i = 0;
        while (i < times) {
            let randomLetter = array[Math.floor(Math.random()*array.length)];
            if (newArr.includes(randomLetter)) {
                i--;
            } else {
                newArr.push(randomLetter)
            }
            i++;
        }
        return newArr;
    };

    arrayWithout(array, i) {
        let index = array.indexOf(i);
        array.splice(index, 1);
        return array;
    }

    positionCard(e) {
        let middle = e.target.offsetWidth/2;
        if (e.clientX < middle) {
            console.log('left', middle, e.clientX)
            return 'left';
        } else if (e.clientX >= middle) {
            console.log('right', middle, e.clientX)
            return 'right';
        }
    }

    selectCard (e, i) {
        let parent = e.target.parentNode.className;
        let card = document.getElementsByTagName(e.target.tagName);
        if (this.state.selected) {
            console.log('oops you already picked')
        } else if (parent === 'hand') {
            this.setState({
                hand: this.arrayWithout(this.state.hand, i),
                selected:i});
        } else if (parent === 'word') {
            this.setState({
                word: this.arrayWithout(this.state.word, i),
                selected:i});
        }
    }


    addCard (e) {
        let newArr = this.state.word.slice();
        if (this.state.selected) {
            if (e.target.className === 'word') {
                if (this.positionCard(e) === "left") {
                    newArr.unshift(this.state.selected)
                } else {
                    newArr.push(this.state.selected)
                }
                this.setState({
                    word: newArr,
                    selected: ''});
            } else if (e.target.className === 'hand'){
                this.setState({
                    hand: [...this.state.hand, this.state.selected],
                    selected: ''
                });
        }

        }
    }

    submit () {

            this.setState({
                hand: this.randomize(deck, this.props.round),
                left: this.randomize(deck, this.props.round),
                discard: [],
                word: []
            });
            this.props.dispatch(submitWord(this.state.word));
            this.props.dispatch(deal(this.props.round));

    }

    render() {
        return (
            <div style={{width: "100%", marginTop: "20%"}}>
                <h3>Hand:</h3>
                <div className='hand' onClick={e => this.addCard(e)}>
                    { this.state.hand.map(i => {
                            return (
                                <span key={i} className='card' onClick={(e) => this.selectCard(e, i)}>
                                     <div >{this.props.values[i]}</div>
                                    <p >{i}</p>
                                </span>
                            )

                       })}
                </div>
                <h3>Make a Word:</h3>
                <div className='word' onClick={e => this.addCard(e)}>
                    {this.state.word.map(i =>
                                <span key={'word' + i} onClick={(e) => this.selectCard(e, i)}>
                                     <div >{this.props.values[i]}</div>
                                    <p  >{i}</p>
                                </span>)}

                </div>
                {/*<div className={"discard"} onClick={e => this.addCard(e)}>*/}
                {/*    {this.state.discard.map(i => <span key={i} onClick={(e) => this.selectCard(e, i)}>*/}
                {/*                     <div key={{i}}>{this.props.values[i]}</div>*/}
                {/*                    <p>{i}</p>*/}
                {/*                </span>)}*/}
                {/*</div>*/}
                <button onClick={this.submit}>Submit</button>

            </div>

        )
    }
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Hand);