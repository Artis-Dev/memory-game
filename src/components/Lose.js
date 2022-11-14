import PropTypes from 'prop-types';

import '../styles/Lose.css';

import Difficulty from './Difficulty';

function Lose(props) {
  const { handleNewGame } = props;

  return (
    <div className="Lose">
      <p>You lost</p>
      <Difficulty handleNewGame={handleNewGame} />
    </div>
  );
}

Lose.propTypes = {
  handleNewGame: PropTypes.func.isRequired,
};

export default Lose;
