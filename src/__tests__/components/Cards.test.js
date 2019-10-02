
import React from 'react';
import {shallow, mount} from 'enzyme';
import enzymeConfig from '../../../enzyme.config';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import Cards from '../../components/Cards';
import {randomize} from "../../components/Logic";
import {deck, values} from "../../Deck";
import {submitScore, updateHand, updateWord, deal, SCORE} from '../../actions';

const mockStore = configureMockStore();
jest.mock('../../actions');

describe('Cards', () => {
    let store;
    let mockState = {};
    beforeEach(() => {
        mockState = {
            hand: randomize(deck, 3),
            round: 3,
            word: ["yooo"],
            score: 0,
            selected: '',
            discardCount: 0,
            displayP: false,
            values
        };
    });

    store = mockStore(mockState);
    submitScore.mockReturnValueOnce({
        type: 'SCORE',
        score:mockState.score,
        count: mockState.count
    });

    it('should render Cards', () => {
        const component = mount(<Cards store={store}/>);
        const count = component.find('div').length;
        // expect(count).toEqual(4);
    });

    it('should not display', () => {
        mockState.displayP = false;
        const component = mount(<Cards store={store}/>);
        const count = component.find('div').length;
        // expect(count).toEqual(4);
    });

});