import React from 'react';
import Task from './task.component';
import renderer from 'react-test-renderer'

describe('<Task />', () => {
  
    it('will render without exploading!', () => {
        const tree = renderer.create(<Task />).toJSON();
        expect(tree).toMatchSnapshot();
    });

})