import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { fetchMissonsAction } from '../redux/missions/missions';
import MissionItem from './MissionItem';

let flag = false;
const Mission = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!flag) {
      dispatch(fetchMissonsAction());
      flag = true;
    }
  }, [dispatch]);

  const mission = useSelector((state) => state.missions);

  return (
    <Table className="table1" striped bordered hover responsive="sm">
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
            id={item.mission_id}
            missionName={item.mission_name}
            missionDesc={item.description}
            reserved={item.reserved ? item.reserved : false}
          />
        ))}
      </tbody>
    </Table>

  );
};

export default Mission;
