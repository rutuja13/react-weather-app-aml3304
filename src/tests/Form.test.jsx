import { configure, shallow } from "enzyme";
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Form from "../components/Form";
import * as apiService from "../service/api";


configure({ adapter: new Adapter() });

jest.mock('../service/api', () => {
    return {
        getData: jest.fn()
    };
});

describe('Form Component', () => {
    it('Snapshot Matching', () => {
        const wrapper = shallow(<Form />);
        expect(wrapper.getElements()).toMatchSnapshot();
    });

});

