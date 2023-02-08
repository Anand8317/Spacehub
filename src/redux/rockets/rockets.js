import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchRockets from '../../services/rocketsService';

const FETCH_ROCKETS = 'FETCH_ROCKETS';
const RESERVED_ROCKETS = 'RESERVED_ROCKETS';
const initialState = { rocket: [] };

export const showRockets = createAsyncThunk(
  FETCH_ROCKETS,
  async (post, thunkAPI) => {
    const payload = await fetchRockets();
    thunkAPI.dispatch({ type: FETCH_ROCKETS, payload });
  },
);

export const reserveRocket = (id) => (dispatch, getState) => {
  const state = getState().rockets.rocket;

  const newState = state.map((rocket) => {
    if (rocket.id !== id) return rocket;
    const reserved = !rocket.reserved;
    return { ...rocket, reserved };
  });
  dispatch({
    type: RESERVED_ROCKETS,
    payload: newState,
  });
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, rocket: action.payload };
    case RESERVED_ROCKETS:
      return { ...state, rocket: action.payload };
    default:
      return state;
  }
};

export default rocketReducer;
