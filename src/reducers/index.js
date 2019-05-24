import {deck, values} from '../Deck';
import {DEAL, WORD, HAND, SCORE, SELECTED, DISCARD, DISPLAYP} from '../actions'
import {randomize} from '../components/Logic'

const initialState = {
    hand:  randomize(deck, 3),
    round: 3,
    word: [],
    score: 0,
    selected: '',
    discardCount: 0,
    displayP: false,
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
                word: action.word
            };
        case HAND:
            return {...state,
                hand:action.hand
            };
        case SCORE:
            return {...state,
                score: state.score + action.score - action.count
            };
        case SELECTED:
            return {...state,
                selected: action.selected
            };
        case DISCARD:
            return {...state,
                selected: '',
                discardCount: state.discardCount + 1,
                hand: action.hand
            };
        case DISPLAYP:
            return {...state,
                displayP: action.displayP
            };

        default:
            return state;
    }
};

export default reducers;