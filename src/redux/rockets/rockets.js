import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_ROCKETS = ' FETCH_ROCKETS';
const initialState = [];

export const fetchRockets = createAsyncThunk(
  FETCH_ROCKETS,
  async (_, { dispatch }) => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();
    const rockets = data.map((item) => ({
      id: item.rocket_id,
      name: item.rocket_name,
      type: item.rocket_type,
      image: item.flickr_images[0],
    }));
    dispatch({
      type: FETCH_ROCKETS,
      payload: rockets,
    });
  },
);

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS.fulfilled:
      return action.payload;
    default:
      return state;
  }
};

export default rocketReducer;
