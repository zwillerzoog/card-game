import {deck, values} from '../Deck';
import {DEAL, WORD, SCORE} from '../actions'



const wordScore = (array) => {
    let score = 0;
    array.map((a, b) => {
        score = score + values[a];
    });
    return score;
}

const initialState = {
    wholeDeck: deck,
    // hand:  randomize(deck, 3),
    round: 3,
    word: [],
    score: 0,
    values
};


const reducers = (state = initialState, action) => {
    switch (action.type) {
        case DEAL:
            return {...state,
                // hand: randomize(state.wholeDeck, state.round),
                round: state.round + 1};
        case WORD:
            return {...state,
                word: action.word,
                score: wordScore(action.word)
            };
        default:
            return state;
    }
};

export default reducers;