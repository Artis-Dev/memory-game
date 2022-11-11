import PropTypes from 'prop-types';

import '../styles/Main.css';

import CardList from './CardList';
import NewGame from './NewGame';

function Main(props) {
  const { newGame, handleNewGame, stats, handleScore } = props;

  return (
    <main className="Main">
      {newGame ? (
        <NewGame handleNewGame={handleNewGame} />
      ) : (
        <CardList stats={stats} handleScore={handleScore} />
      )}
    </main>
  );
}

Main.propTypes = {
  newGame: PropTypes.bool.isRequired,
  handleNewGame: PropTypes.func.isRequired,
  handleScore: PropTypes.func.isRequired,
  stats: PropTypes.shape({}).isRequired,
};

export default Main;
