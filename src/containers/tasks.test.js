import React from 'react';
import Tasks from './tasks.container';
import renderer from 'react-test-renderer';
import 'jest-styled-components'

const tasks = [];

describe('<Tasks />', () => {
    it('should render without exploding!', () => {
        const tree = renderer.create(<Tasks tasks={ tasks } />).toJSON()
        expect(tree).toMatchSnapshot();
    })
})