import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissonsAction } from '../redux/missions/missions';

const Mission = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissonsAction());
  }, [dispatch]);

  return (
    <div>
      <h1>Missions</h1>
    </div>
  );
};

export default Mission;
