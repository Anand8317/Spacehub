import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

const MissionProfile = () => {
  const mission = useSelector((state) => state.missions);

  return (
    <div className="mission-table">
      <h2>My Missions</h2>
      <Table bordered>
        <tbody>
          {mission
            .filter((obj) => obj.reserved)
            .map((item) => (
              <tr key={item.mission_id}>
                <td>{item.mission_name}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

const RocketsProfile = () => {
  const rockets = useSelector((state) => state.rockets.rocket);
  const reservedRocket = Array.isArray(rockets) ? rockets.filter((rocket) => rocket.reserved) : [];
  console.log(reservedRocket);
  return (
    <div className="rocket-table">
      <h2>My Rockets</h2>
      <Table bordered>
        <tbody>
          {
            reservedRocket.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.name}</td>
              </tr>
            ))}
      
        </tbody>
      </Table>
    </div>
  );
};

export { RocketsProfile, MissionProfile };
