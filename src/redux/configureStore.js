import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    rocekts: rocketReducer,
  },
  middleware: [thunk],
});

export default store;
