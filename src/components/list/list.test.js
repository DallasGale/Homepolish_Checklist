import React from 'react';
import List from './list.component';
import renderer from 'react-test-renderer';

describe('<List />', () => {
  
    it('will render without exploading!', () => {
        const tree = renderer.create(<List />).toJSON();
        expect(tree).toMatchSnapshot();
    });

})