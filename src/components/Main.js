import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import '../styles/Main.css';
import '../styles/transition.css';

import Game from './Game';
import NewGame from './NewGame';
import EndGame from './EndGame';

function Main(props) {
  const { handleNewGame, stats, handleScore, handleEndGame } = props;

  let gameView = '';
  if (stats.state === 'newgame') {
    gameView = (
      <CSSTransition in appear timeout={500} classNames="animation">
        <NewGame handleNewGame={handleNewGame} />
      </CSSTransition>
    );
  } else if (stats.state === 'playing') {
    gameView = (
      <Game
        stats={stats}
        handleScore={handleScore}
        handleEndGame={handleEndGame}
      />
    );
  } else {
    gameView = (
      <CSSTransition in appear timeout={500} classNames="animation">
        <EndGame state={stats.state} handleNewGame={handleNewGame} />
      </CSSTransition>
    );
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
