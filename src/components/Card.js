import PropTypes from 'prop-types';

import '../styles/Card.css';
import frame from '../assets/frame.png';

function Card(props) {
  const { image } = props;
  return (
    <div className="Card">
      <img src={image} alt="Card" />
      <img src={frame} alt="" />
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Card;
