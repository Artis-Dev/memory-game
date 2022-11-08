import PropTypes from 'prop-types';

import '../styles/Main.css';

import CardList from './CardList';
import NewGame from './NewGame';

function Main(props) {
  const { newGame, handleNewGame } = props;

  return (
    <main className="Main">
      {newGame ? <NewGame handleNewGame={handleNewGame} /> : <CardList />}
    </main>
  );
}

Main.propTypes = {
  newGame: PropTypes.bool.isRequired,
  handleNewGame: PropTypes.func.isRequired,
};

export default Main;
