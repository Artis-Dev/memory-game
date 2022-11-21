import PropTypes from 'prop-types';

import '../styles/Main.css';

import Game from './Game';
import NewGame from './NewGame';
import EndGame from './EndGame';

function Main(props) {
  const { handleNewGame, stats, handleScore, handleEndGame } = props;

  let gameView = '';
  if (stats.state === 'newgame') {
    gameView = <NewGame handleNewGame={handleNewGame} />;
  } else if (stats.state === 'playing') {
    gameView = (
      <Game
        stats={stats}
        handleScore={handleScore}
        handleEndGame={handleEndGame}
      />
    );
  } else {
    gameView = <EndGame state={stats.state} handleNewGame={handleNewGame} />;
  }
  return <main className="Main">{gameView}</main>;
}

Main.propTypes = {
  handleNewGame: PropTypes.func.isRequired,
  handleScore: PropTypes.func.isRequired,
  handleEndGame: PropTypes.func.isRequired,
  stats: PropTypes.shape({
    state: PropTypes.string.isRequired,
  }).isRequired,
};

export default Main;
