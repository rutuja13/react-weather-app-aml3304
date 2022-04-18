import { configure, shallow } from "enzyme";
import About from "../components/AboutUs";
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

describe('About Us Component', () => {
    it('Snapshot Matching', () => {
       const wrapper = shallow(<About />);
       expect(wrapper.getElements()).toMatchSnapshot();
    });

    it('Prevent Users', () => {
       const wrapper = shallow(<About />);
       expect(wrapper.text().includes('shall not')).toBe(true);
    });

    it('Mentions College', () => {
        const wrapper = shallow(<About />);
        expect(wrapper.text().includes('Lambton College')).toBe(true);
     });

     it('Should not contain other college names', () => {
        const wrapper = shallow(<About />);
        expect(wrapper.text().includes('Seneca College')).toBe(false);
     });
 });