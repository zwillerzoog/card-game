import {deck, values} from '../Deck';
import {DEAL, WORD, HAND} from '../actions'
import {randomize} from '../components/Logic'

const wordScore = (array) => {
    let score = 0;
    array.map((a, b) => {
        score = score + values[a];
    });
    return score;
}

const initialState = {
    hand:  randomize(deck, 3),
    round: 3,
    word: [],
    score: 0,
    values
};


const reducers = (state = initialState, action) => {
    switch (action.type) {
        case DEAL:
            if (state.round < 8) {
                return {...state,
                    round: state.round + 1};
            } else {
                return {...state,
                    round: 3};
            }
        case WORD:
            return {...state,
                word: action.word,
                score: wordScore(action.word)
            };
        case HAND:
            return {...state,
                hand:action.hand
            };
        default:
            return state;
    }
};

export default reducers;