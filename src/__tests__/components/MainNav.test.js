
import React from 'react';
import {shallow, mount} from 'enzyme';
import enzymeConfig from '../../../enzyme.config';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components
import MainNav from '../../components/MainNav';

// Component to be tested
describe('MainNav', () => {

    it('should render MainNav', () => {
        const component = shallow(<MainNav/>);
        const count = component.find('div').length;
        // expect(count).toEqual(4);
    });

});