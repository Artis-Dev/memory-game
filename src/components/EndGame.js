import PropTypes from 'prop-types';

import '../styles/EndGame.css';

import Difficulty from './Difficulty';

function EndGame(props) {
  const { state, handleNewGame } = props;

  return (
    <div className="EndGame">
      {state === 'win' ? <h2>You Win!</h2> : <h2>You Lose!</h2>}
      <Difficulty handleNewGame={handleNewGame} />
    </div>
  );
}

EndGame.propTypes = {
  state: PropTypes.string.isRequired,
  handleNewGame: PropTypes.func.isRequired,
};

export default EndGame;
