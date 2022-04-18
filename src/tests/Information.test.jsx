import { configure, shallow } from "enzyme";
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Information from "../components/Information";


configure({ adapter: new Adapter() });

jest.mock('../service/api', () => {
    return {
        getData: jest.fn()
    };
});

describe('Information Component', () => {
    it('Snapshot Matching', () => {
        const wrapper = shallow(<Information />);
        expect(wrapper.getElements()).toMatchSnapshot();
    });

    it('Data Component', () => {
        const wrapper = shallow(<Information />);
        expect(wrapper.find('Data')).toBeTruthy();
    });

    it('Typography Component', () => {
        const wrapper = shallow(<Information />);
        expect(wrapper.find('Typography')).toBeTruthy();
    });


});

