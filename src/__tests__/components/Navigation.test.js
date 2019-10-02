
import React from 'react';
import {shallow, mount} from 'enzyme';
import enzymeConfig from '../../../enzyme.config';
import Navigation from '../../components/Navigation';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components

// Component to be tested
describe('Navigation', () => {

    it('should render Navigation', () => {
        const component = shallow(<Navigation/>);
        const count = component.find('div').length;
        // expect(count).toEqual(4);
    });

    // it('should contain links to the dashboard and query', () => {
    //     document.body.innerHTML += '' +
    //         '<div id="queryLink" title="Query" className="nav navbar-nav"></div>' +
    //         '<div id="dashboardLink" title="My Dashboard" className="nav navbar-nav active-nav-link"></div>';
    // });
    //
    // it('should set the activeIndex when tab clicked', () => {
    //     const component = mount(<Dashboard/>);
    //     const requestTab = component.find('#myRequestButton');
    //     const workTab = component.find('#myWorkButton');
    //     requestTab.simulate('click');
    //     workTab.simulate('click');
    // });

});