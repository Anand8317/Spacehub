import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketsList from '../components/Rockets';
import { showRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rocket);
  useEffect(() => {
    dispatch(showRockets());
  }, [dispatch]);
  return (
    <div>
      {rockets.map((rocket) => (
        <RocketsList
          image={rocket.image}
          key={rocket.id}
          title={rocket.name}
          description={rocket.description}
          id={rocket.id}
        />
      ))}
    </div>
  );
};

export default Rockets;
