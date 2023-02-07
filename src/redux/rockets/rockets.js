import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchRockets from '../../services/rocketsService';

const FETCH_ROCKETS = 'FETCH_ROCKETS';
const initialState = { rocket: [] };

export const showRockets = createAsyncThunk(
  FETCH_ROCKETS,
  async (post, thunkAPI) => {
    const payload = await fetchRockets();
    thunkAPI.dispatch({ type: FETCH_ROCKETS, payload });
  },
);

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, rocket: action.payload };
    default:
      return state;
  }
};

export default rocketReducer;
