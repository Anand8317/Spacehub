import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket } from '../redux/rockets/rockets';

const RocketsList = ({
  id, title, description, image, reserved, confirmReservation,
}) => {
  const dispatch = useDispatch();
  const HandlerBtn = () => {
    dispatch(reserveRocket(id));
  };
  return (
    <div>
      <div className="rocketContainer">
        <img src={image} alt={title} />
        <div className="rocketInfo">
          <h3>{title}</h3>
          {
            reserved
              ? (
                <p>
                  <span id="reserved">{confirmReservation}</span>
                  {description}
                </p>
              )
              : (
                <p>
                  <span id="not-reserved">{confirmReservation}</span>
                  {description}
                </p>
              )
          }
          {
            reserved
              ? <button className="reserveBtn" id="cancel" type="button" onClick={HandlerBtn}>Cancel Reservation</button>
              : <button className="reserveBtn" id="reserve" type="button" onClick={HandlerBtn}>Reserve Rocket</button>
          }
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
