import Tilt from 'react-parallax-tilt';
import PropTypes from 'prop-types';

import '../styles/Card.css';
import frame from '../assets/frame.png';

function Card(props) {
  const { card, handleClick } = props;

  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.8}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
    >
      <button
        type="button"
        className="Card"
        onClick={handleClick}
        data-key={card.id}
      >
        <img alt="" src={card.image} />
        <img alt="" src={frame} />
      </button>
    </Tilt>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card;
