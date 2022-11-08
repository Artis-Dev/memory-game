import PropTypes from 'prop-types';

import '../styles/Header.css';

import Stats from './Stats';

function Header(props) {
  const { newGame, stats } = props;

  return (
    <header className="Header">
      <h1>Memory Game</h1>
      <Stats stats={stats} newGame={newGame} />
    </header>
  );
}

Header.propTypes = {
  newGame: PropTypes.bool.isRequired,
  stats: PropTypes.shape({
    mode: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    highscore: PropTypes.number.isRequired,
  }).isRequired,
};

export default Header;
