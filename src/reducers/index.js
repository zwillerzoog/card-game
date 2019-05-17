import deck from '../Deck';
import {DEAL} from '../actions'

const repeat = (array, times) => {
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

const initialState = {
    wholeDeck: deck,
    hand:  repeat(deck, 3),
    round: 3
};


const reducers = (state = initialState, action) => {
    switch (action.type) {
        case DEAL:
            return {...state,
                hand: repeat(state.wholeDeck, state.round),
                round: state.round + 1};
        default:
            return state;
    }
};

export default reducers;