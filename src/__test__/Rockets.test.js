import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import RocketsList from '../components/Rockets';
import store from '../redux/configureStore';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}><RocketsList /></Provider>,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
