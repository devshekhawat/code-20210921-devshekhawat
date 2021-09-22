import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('Match App Snapshot', () => {
  const component = renderer(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});