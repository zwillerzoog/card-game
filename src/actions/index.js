export const DEAL= "DEAL";
export const WORD= "WORD";
export const SCORE = "SCORE";
export const HAND = 'HAND';

export const deal = (round) => ({
    type: DEAL,
    round
});

export const updateWord = (word) => ({
    type: WORD,
    word,
    score: SCORE
});

export const updateHand = (hand) => ({
    type: HAND,
    hand
});

export const submitScore = (score) => ({
    type:SCORE,
    score
})