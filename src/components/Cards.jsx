import React from 'react';
import {connect} from 'react-redux';
import '../styles/Cards.css'
export class Hand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: [],
            selected: ''
        };
        this.selectCard = this.selectCard.bind(this)
    }


    selectCard (e) {
        this.setState({selected: e.target.innerHTML});
        console.log('hey', this.state)
    }
    addCard (e) {
        if (this.state.word.includes(this.state.selected)) {
            console.log('you already used that');
        } else {
            e.target.innerHTML = this.state.selected;
            this.setState({
                word: [...this.state.word, this.state.selected],
                selected: ''})
            console.log('state', this.state)
        }

    }

    render() {
        console.log(this.props);
        return (
            <div style={{width: "100%", marginTop: "25%"}}>
                <div className='empty'>
                    { this.props.hand.map(i => <span onClick={e => this.addCard(e)} key={i} className='emptySpan'></span> )}
                </div>
                <div className='full'>
                    { this.props.hand.map(i => <span key={i} onClick={e => this.selectCard(e)}>{i}</span> )}
                </div>
            </div>

        )
    }
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Hand);