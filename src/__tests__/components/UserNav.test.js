
import React from 'react';
import {shallow, mount} from 'enzyme';
import enzymeConfig from '../../../enzyme.config';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
import UserNav from '../../components/UserNav';
import {randomize} from "../../components/Logic";
import {deck, values} from "../../Deck";

// Component to be tested
describe('UserNav', () => {
    let store;
    let mockState = {};
    beforeEach(() => {
        mockState = {
            hand: randomize(deck, 3),
            round: 3,
            word: [],
            score: 0,
            selected: '',
            discardCount: 0,
            displayP: false,
            values
        };
    });

    store = mockStore(mockState);

    it('should render UserNav', () => {
        const component = mount(<UserNav store={store}/>);
        const count = component.find('div').length;
        // expect(count).toEqual(4);
    });

});