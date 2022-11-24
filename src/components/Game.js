import PropTypes from 'prop-types';

import '../styles/Game.css';

import CardList from './CardList';

function Game(props) {
  const { stats, handleScore, handleEndGame } = props;

  return (
    <div className="Game">
      <p>
        Get points for choosing a card, but don&apos;t choose the same one
        twice.
      </p>
      <CardList
        stats={stats}
        handleScore={handleScore}
        handleEndGame={handleEndGame}
      />
    </div>
  );
}

Game.propTypes = {
  stats: PropTypes.shape({}).isRequired,
  handleScore: PropTypes.func.isRequired,
  handleEndGame: PropTypes.func.isRequired,
};

export default Game;
