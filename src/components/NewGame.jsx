import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import '../styles/NewGame.css';

import Description from './Description';
import Difficulty from './Difficulty';

function NewGame(props) {
  const { state, handleNewGame } = props;
  const nodeRef = useRef(null);

  let info = null;

  if (state === 'newgame') {
    info = <Description />;
  } else if (state === 'win') {
    info = <h2>You Win!</h2>;
  } else {
    info = <h2>You Lose!</h2>;
  }
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in
      appear
      timeout={500}
      classNames="animation"
    >
      <div ref={nodeRef} className="NewGame">
        {info}
        <Difficulty handleNewGame={handleNewGame} />
      </div>
    </CSSTransition>
  );
}

NewGame.propTypes = {
  state: PropTypes.string.isRequired,
  handleNewGame: PropTypes.func.isRequired,
};

export default NewGame;
