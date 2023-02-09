import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_MISSIONS_ONCE = 'spacehub/missions/FETCH_MISSIONS_ONCE';
const JOIN_MISSION = 'spacehub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'spacehub/missions/LEAVE_MISSION';

const url = 'https://api.spacexdata.com/v3/missions';

const fetchMissonsAction = createAsyncThunk(
  FETCH_MISSIONS_ONCE,
  async (post, { dispatch }) => {
    const res = await fetch(url);
    const resJson = await res.json();
    const missions = await resJson.map((item) => ({
      mission_id: item.mission_id,
      mission_name: item.mission_name,
      description: item.description,
    }));
    dispatch({ type: FETCH_MISSIONS_ONCE, missions });
  },
);

const joinMissionAction = (id) => ({
  type: JOIN_MISSION,
  id,
});

const leaveMissionAction = (id) => ({
  type: LEAVE_MISSION,
  id,
});

export function missionsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_MISSIONS_ONCE:
      return action.missions;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.id) return mission;
        return { ...mission, reserved: true };
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.id) return mission;
        return { ...mission, reserved: false };
      });
    default: return state;
  }
}

export { fetchMissonsAction, joinMissionAction, leaveMissionAction };
