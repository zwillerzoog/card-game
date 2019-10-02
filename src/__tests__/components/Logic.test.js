import React from 'react';
import {mount, shallow} from 'enzyme';

import Logic from '../../components/Logic'
import {randomize, arrayWithout, positionCard, wordScore} from '../../components/Logic'

describe('Logic', () => {

    it('should render Logic with a status of 400', () => {
        const deck = ['A', 'B', 'C'];
        const expected = {"status": 400, "message":'The request cannot be fulfilled due to bad syntax'};
        randomize(deck, 2);
        // expect(ErrorHandler(error)).toEqual(expected);
    });

    it('should render Logic with a status of 500', () => {
        const error = {};
        const expected = {"status": 500, "message":'Service unavailable. Please contact the USCIS Help Desk for support.'};
        // ErrorHandler(error)
        // expect(ErrorHandler(error)).toEqual(expected);
    });

    it('should render Logic with a status of 402', () => {
        const error = {response: {status: 402}};
        const expected = {"status": 402, "message":'Service unavailable. Please contact the USCIS Help Desk for support.'};
        // ErrorHandler(error);
        // expect(ErrorHandler(error)).toEqual(expected);

    });
})