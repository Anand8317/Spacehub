import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const mission = useSelector((state) => state.missions);

  return (
    <div className="mission-table">
      <h2>Missions</h2>
      <Table bordered>
        <tbody>
          { mission.filter((obj) => obj.reserved).map((item) => (
            <tr key={item.mission_id}>
              <td>{item.mission_name}</td>
            </tr>
          )) }
        </tbody>
      </Table>
    </div>

  );
};

const RocketsProfile = () => (
  <div className="rocket-table">
    <h2>Rockets</h2>
    <Table bordered>
      <tbody>
        <tr>
          <td>Soon</td>
        </tr>
        <tr>
          <td>Soon</td>
        </tr>
      </tbody>
    </Table>
  </div>

);

export { RocketsProfile, MissionProfile };
