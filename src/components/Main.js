import PropTypes from 'prop-types';

import '../styles/Main.css';

import CardList from './CardList';
import NewGame from './NewGame';

function Main(props) {
  const { handleNewGame, stats, handleScore } = props;

  return (
    <main className="Main">
      {stats.state === 'newgame' ? (
        <NewGame handleNewGame={handleNewGame} />
      ) : (
        <CardList stats={stats} handleScore={handleScore} />
      )}
    </main>
  );
}

Main.propTypes = {
  handleNewGame: PropTypes.func.isRequired,
  handleScore: PropTypes.func.isRequired,
  stats: PropTypes.shape({
    state: PropTypes.string.isRequired,
  }).isRequired,
};

export default Main;
