import React from 'react';
import List from './list.component';
import renderer from 'react-test-renderer';

const tasks = [];

describe('<List />', () => {
  
    it('will render without exploading!', () => {
        const tree = renderer.create(<List data={ tasks } />).toJSON();
        
        expect(tree).toMatchSnapshot();
    });

})