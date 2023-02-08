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
      <td>{missionName}</td>
      <td>{missionDesc}</td>
      <td width={150}>
        { reserved ? <Button variant="primary" className="am-btn" size="sm">ACTIVE MEMBER</Button> : <Button variant="secondary" className="center" size="sm">NOT A MEMBER </Button> }
      </td>
      <td width={150}>
        { reserved ? <Button variant="outline-danger" className="center" size="sm" onClick={clickHandler}>LEAVE MISSION</Button> : <Button variant="outline-secondary" className="center" size="sm" onClick={clickHandler}>JOIN MISSION</Button> }
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
