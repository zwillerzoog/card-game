export const DEAL = "DEAL";
export const WORD = "WORD";
export const SCORE = "SCORE";
export const HAND = 'HAND';
export const SELECTED = 'SELECTED';
export const DISCARD = 'DISCARD';
export const DISPLAYP = 'DISPLAYP';

export const deal = (round) => ({
    type: DEAL,
    round
});

export const updateWord = (word, score) => ({
    type: WORD,
    word,
    score
});

export const updateHand = (hand) => ({
    type: HAND,
    hand
});

export const submitScore = (score, count) => ({
    type:SCORE,
    score,
    count
});

export const selected = (selected) => ({
    type:SELECTED,
    selected
});

export const discard = (selected, discard, hand) => ({
    type:DISCARD,
    selected,
    discard,
    hand
});

export const displayP = (displayP) => ({
    type:DISPLAYP,
    displayP
});

