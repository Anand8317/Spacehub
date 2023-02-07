import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';
import { missionsReducer } from './missions/missions';

const store = configureStore({
  reducer: {
    rocekts: rocketReducer,
    missions: missionsReducer,
  },
  middleware: [thunk],
});

export default store;
