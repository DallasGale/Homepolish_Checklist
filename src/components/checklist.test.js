import React from 'react';
import renderer from 'react-test-renderer';
import Checklist from './checklist';

it('renders correctly', () => {
  const tree = renderer.create(<Checklist />).toJSON();
  expect(tree).toMatchSnapshot();
});
