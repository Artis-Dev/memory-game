import PropTypes from 'prop-types';

import '../styles/Main.css';

import CardList from './CardList';
import NewGame from './NewGame';
import Lose from './Lose';

function Main(props) {
  const { handleNewGame, stats, handleScore, handleEndGame } = props;

  let gameView = '';
  if (stats.state === 'newgame') {
    gameView = <NewGame handleNewGame={handleNewGame} />;
  } else if (stats.state === 'playing') {
    gameView = (
      <CardList
        stats={stats}
        handleScore={handleScore}
        handleLose={handleEndGame}
      />
    );
  } else if (stats.state === 'lose') {
    gameView = <Lose handleNewGame={handleNewGame} />;
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
