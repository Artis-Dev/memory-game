import PropTypes from 'prop-types';

import '../styles/Header.css';

import Stats from './Stats';

function Header(props) {
  const { stats } = props;

  return (
    <header className="Header">
      <h1>Memory Game</h1>
      <Stats stats={stats} />
    </header>
  );
}

Header.propTypes = {
  stats: PropTypes.shape({}).isRequired,
};

export default Header;
