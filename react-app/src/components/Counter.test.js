import React, {Component} from 'react';
import Counter from './Counter';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount, configure} from 'enzyme';
import {create} from 'react-test-renderer';

configure({adapter: new Adapter()})


describe("Counter Test suite", ()=> {

    it("should be created", () => {

        const wrapper =  shallow(<Counter />);
        const instance =  wrapper.instance();
        expect(instance).toBeTruthy();
    });

    it("should have state.count = 5", () => {
        // var x = 10;
        // expect(x).toBe(1);
        const wrapper= mount(<Counter/>);
        const state = wrapper.state();
        const count = state.count;
        expect(count).toBe(5);

    });

    it("should have state.count incremented by 1", () => {
        // var x = 10;
        // expect(x).toBe(1);
        const wrapper= mount(<Counter/>);
        const instance = wrapper.instance();
        instance.inc();
        const state = wrapper.state();
        const count = state.count;
        expect(count).toBe(6);

    });

    it("should have state.count incremented by 1 on button click", () => {
        // var x = 10;
        // expect(x).toBe(1);
        const wrapper= shallow(<Counter />);
        
        wrapper.find("#incBtn").simulate('click');
        wrapper.find("#incBtn").simulate('click');

        const state = wrapper.state();
        const count = state.count;
        expect(count).toBe(7);

    });

    it("snapshot", () => {
       
        const wrapper= create(<Counter title="Counter"/>);
        expect(wrapper.toJSON()).toMatchSnapshot();
    });



})