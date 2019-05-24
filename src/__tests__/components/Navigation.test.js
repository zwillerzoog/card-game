import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

// Component to be tested
import Navigation from '../../components/Navigation';

describe('<Navigation />', () => {
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = shallow(<Navigation />);
            const component = wrapper.dive();

            expect(toJson(component)).toMatchSnapshot();
        });
    });
});