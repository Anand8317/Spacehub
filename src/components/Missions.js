import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { fetchMissonsAction } from '../redux/missions/missions';
import MissionItem from './MissionItem';

const Mission = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissonsAction());
  }, [dispatch]);

  const mission = useSelector((state) => state.missions);

  return (
    <Table striped bordered hover responsive="sm">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th aria-label="member" />
        </tr>
      </thead>
      <tbody>
        {mission.map((item) => (
          <MissionItem
            key={item.mission_id}
            missionName={item.mission_name}
            missionDesc={item.description}
          />
        ))}
      </tbody>
    </Table>

  );
};

export default Mission;
