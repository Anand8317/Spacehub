import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket } from '../redux/rockets/rockets';

const RocketsList = ({
  id, title, description, image, reserved, confirmReservation,
}) => {
  const dispatch = useDispatch();
  const HandlerBtn = () => {
    dispatch(reserveRocket(id));
    console.log(reserved);
  };
  return (
    <div>
      <div className="rocketContainer">
        <img src={image} alt={title} />
        <div className="rocketInfo">
          <h3>{title}</h3>
          <p>
            <span id={reserved ? 'reserved' : 'not-reserved'}>{confirmReservation}</span>
            {description}
          </p>
          <button className="reserveBtn" id={reserved ? 'cancel' : 'reserve'} type="button" onClick={HandlerBtn}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
        </div>
      </div>

    </div>
  );
};

RocketsList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  confirmReservation: PropTypes.string.isRequired,
};

export default RocketsList;
