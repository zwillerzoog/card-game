export const DEAL= "DEAL";
export const WORD= "WORD";
export const SCORE = "SCORE";

export const deal = (round) => ({
    type: DEAL,
    round
});

export const submitWord = (word) => ({
    type: WORD,
    word,
    score: SCORE
});