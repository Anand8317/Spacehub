import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const MissionItem = (props) => {
  const { missionName, missionDesc } = props;

  return (
    <tr>
      <td>{missionName}</td>
      <td>{missionDesc}</td>
      <td width={135}>
        <Button variant="secondary" className="center" size="sm">NOT A MEMBER</Button>
        {' '}
      </td>
      <td width={130}>
        <Button variant="outline-secondary" className="center" size="sm">JOIN MISSION</Button>
        {' '}
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionDesc: PropTypes.string.isRequired,
};

export default MissionItem;
