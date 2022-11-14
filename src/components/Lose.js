import PropTypes from 'prop-types';

import '../styles/Lose.css';

import Difficulty from './Difficulty';

function NewGame(props) {
  const { handleNewGame } = props;

  return (
    <div className="Lose">
      <p>You lost</p>
      <Difficulty handleNewGame={handleNewGame} />
    </div>
  );
}

NewGame.propTypes = {
  handleNewGame: PropTypes.func.isRequired,
};

export default NewGame;
