import {values} from "../Deck";

export const randomize = (array, times) => {
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

export const arrayWithout = (array, i) => {
    let index = array.indexOf(i);
    array.splice(index, 1);
    return array;
};

export const positionCard = (e) =>  {
    let middleOfLast;
    let obj = e.target.childNodes;
    let finalCard;
    if (e.target.childNodes[0]) {
        for (let key in obj) {
            if (obj[key].childNodes) {
                let middle = obj[key].offsetWidth/2 + obj[key].offsetLeft;
                if (middleOfLast) {
                    if (middle < e.clientX) {
                        middleOfLast = middle;
                    } else if (middleOfLast < e.clientX < middle) {
                        return obj[key].childNodes[1].innerHTML;
                    } else if (middleOfLast < e.clientX && middle < e.clientX) {
                        middleOfLast = middle;
                    } else {
                        console.log('it did not work ya dummy')
                    }
                } else {
                    if (e.clientX < middle) {
                        return obj[key].childNodes[1].innerHTML;
                    } else if (e.clientX > middle) {
                        middleOfLast = middle;
                    }
                }
            }
        }
        return finalCard
    }
};

export const wordScore = (array) => {
    let score = 0;
    array.map((a, b) => {
        score = score + values[a];
    });
    console.log('score', score)
    return score;
}