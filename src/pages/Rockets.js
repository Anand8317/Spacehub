import React from 'react';
import { useSelector } from 'react-redux';
import RocketsList from '../components/Rockets';

const Rockets = () => {
  // const rockets = useSelector((state) => state.rockets.rocket);

  return (
    <div>
      {rockets && rockets.map((rocket) => (
        <RocketsList
          image={rocket.image}
          key={rocket.id}
          title={rocket.name}
          description={rocket.description}
          id={rocket.id}
          confirmReservation={rocket.reserved ? 'Reserved' : ''}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

export default Rockets;
