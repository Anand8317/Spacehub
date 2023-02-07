import PropTypes from 'prop-types';

const RocketsList = ({
  title, description, image,
}) => (
  <div>
    <div className="rocketContainer">
      <img src={image} alt={title} />
      <div className="rocketInfo">
        <h3>{title}</h3>
        <p>
          {description}
        </p>
      </div>
    </div>

  </div>
);

RocketsList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default RocketsList;
