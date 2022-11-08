import PropTypes from 'prop-types';

import '../styles/Main.css';

import Description from './Description';
import Button from './Button';
import CardList from './CardList';

function Main(props) {
  const { newGame, handleNewGame } = props;

  return (
    <main className="Main">
      {newGame ? (
        <>
          <Description />
          <Button handleClick={handleNewGame} />
        </>
      ) : (
        <CardList />
      )}
    </main>
  );
}

Main.propTypes = {
  newGame: PropTypes.bool.isRequired,
  handleNewGame: PropTypes.func.isRequired,
};

export default Main;
