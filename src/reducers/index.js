import {deck, values} from '../Deck';
import {DEAL, WORD, HAND, SCORE} from '../actions'
import {randomize} from '../components/Logic'



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
            console.log('mew', state.score)
            return {...state,
                word: action.word
            };
        case HAND:
            return {...state,
                hand:action.hand
            };
        case SCORE:
            console.log('score', action.score)
            return {...state,
                score: state.score + action.score
            };
        default:
            return state;
    }
};

export default reducers;