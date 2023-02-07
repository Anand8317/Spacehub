import axios from 'axios';

const FETCH_MISSIONS_ONCE = 'spacehub/missions/FETCH_MISSIONS_ONCE';

const url = 'https://api.spacexdata.com/v3/missions';

const fetchMissonsAction = () => async (dispatch) => {
  const res = await axios.get(url);
  const missions = res.data;
  dispatch({
    type: FETCH_MISSIONS_ONCE,
    missions,
  });
};

export function missionsReducer(state = [], action) {
    switch (action.type) {
      case FETCH_MISSIONS_ONCE:
        return action.missions;
      default: return state;
    }
};

export { fetchMissonsAction };
