import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { RocketsProfile } from '../components/Profile';
import store from '../redux/configureStore';

it('rockets list renders properly', () => {
  const tree = renderer
    .create(<Provider store={store}><RocketsProfile /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
