import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';
import { missionsReducer } from './missions/missions';

const store = configureStore(
  {
    reducer: {
      rockets: rocketReducer,
      missions: missionsReducer,
    },
  },
  applyMiddleware(thunk),
);
export default store;
