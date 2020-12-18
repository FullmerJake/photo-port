import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

const { asFragment } = render(<About />);


//ensures that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

describe('About component', () => {
    //renders About test
    //First test
    //Baseline to verify that the component is rendering. 
    it('renders', () => {
        render(<About />);
    });

    //Second Test
    it('matches snapshot DOM node structure', () => {
        //render About
        // compares whether the expected and actual outcomes match
        // expect function with a matcher to assert something about a value
        expect(asFragment()).toMatchSnapshot();
    })
});