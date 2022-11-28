import { useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import '../styles/Card.css';
import '../styles/transition.css';
import frame from '../assets/frame.png';

function Card(props) {
  const { card, handleClick } = props;
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in
      appear
      timeout={500}
      classNames="animation"
    >
      <Tilt
        glareEnable
        glareMaxOpacity={0.8}
        glareColor="#ffffff"
        glarePosition="bottom"
        glareBorderRadius="3px"
      >
        <button
          ref={nodeRef}
          type="button"
          className="Card"
          onClick={handleClick}
          data-key={card.id}
        >
          <img alt="" src={card.image} />
          <img alt="" src={frame} />
        </button>
      </Tilt>
    </CSSTransition>
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
