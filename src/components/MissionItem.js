import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { joinMissionAction, leaveMissionAction } from '../redux/missions/missions';

const MissionItem = (props) => {
  const {
    id, missionName, missionDesc, reserved,
  } = props;
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    if (!reserved) {
      dispatch(joinMissionAction(e.target.parentNode.parentNode.id));
      return;
    }

    dispatch(leaveMissionAction(e.target.parentNode.parentNode.id));
  };

  return (
    <tr id={id}>
      <td className="missionName">{missionName}</td>
      <td className="missionDesc">{missionDesc}</td>
      <td width={150} className="btn-container btn-container">
        { reserved ? <Button variant="primary" className="am-btn center btn" size="sm">ACTIVE MEMBER</Button> : <Button variant="secondary" className="center btn" size="sm">NOT A MEMBER </Button> }
      </td>
      <td width={150} className="btn-container btn-container">
        { reserved ? <Button variant="outline-danger" className="center btn" size="sm" onClick={clickHandler}>LEAVE MISSION</Button> : <Button variant="outline-secondary" className="center btn" size="sm" onClick={clickHandler}>JOIN MISSION</Button> }
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  missionDesc: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionItem;
