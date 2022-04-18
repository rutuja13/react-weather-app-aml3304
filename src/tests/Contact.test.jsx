import { configure, shallow } from "enzyme";
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Contact from "../components/Contact";

configure({ adapter: new Adapter() });

describe('Contact Component', () => {
    it('Snapshot Matching', () => {
        const wrapper = shallow(<Contact />);
        expect(wrapper.getElements()).toMatchSnapshot();
    });

    it('Image Having Source', () => {
        const wrapper = shallow(<Contact />);
        expect(wrapper.find('img').at(1).prop('src')).toBeTruthy();
    });


    it('Matching titles as per the seasons - Summer', () => {
        const wrapper = shallow(<Contact />);
        expect(wrapper.find('img').filterWhere((item) => {
            return item.prop('alt') === 'Summer';
        })).toHaveLength(1)
    });

    it('Matching titles as per the seasons - Winter', () => {
        const wrapper = shallow(<Contact />);
        expect(wrapper.find('img').filterWhere((item) => {
            return item.prop('alt') === 'Winter';
        })).toHaveLength(1)
    });

    it('Matching titles as per the seasons - Autumn', () => {
        const wrapper = shallow(<Contact />);
        expect(wrapper.find('img').filterWhere((item) => {
            return item.prop('alt') === 'Autumn';
        })).toHaveLength(1)
    });

    it('Matching titles as per the seasons - Spring', () => {
        const wrapper = shallow(<Contact />);
        expect(wrapper.find('img').filterWhere((item) => {
            return item.prop('alt') === 'Spring';
        })).toHaveLength(1)
    });

});

