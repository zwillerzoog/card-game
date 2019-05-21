import React from 'react';
import {connect} from 'react-redux';
import {Hand} from "./Cards";

class Empty extends React.Component{

    addCard (e) {
        if (this.state.word.includes(this.state.selected) || this.state.discard.includes(this.state.selected)) {
            console.log('you already used that');
        } else if (e.target.className === 'emptySpan') {
            e.target.innerHTML = this.state.selected;
            this.setState({
                word: [...this.state.word, this.state.selected],
                selected: ''})
            console.log('state', this.state)
        } else if (e.target.className === 'discard'){
            this.setState({
                discard: [...this.state.discard, this.state.selected],
                selected: ''
            });
        }
    }

    render() {
        return(<div className='empty'>
            <span onClick={e => this.addCard(e)} className='emptySpan'></span>

        </div>)
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Empty);