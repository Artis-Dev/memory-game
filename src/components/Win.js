import PropTypes from 'prop-types';

import '../styles/Win.css';

import Difficulty from './Difficulty';

function Win(props) {
  const { handleNewGame } = props;

  return (
    <div className="Win">
      <p>You Win!</p>
      <Difficulty handleNewGame={handleNewGame} />
    </div>
  );
}

Win.propTypes = {
  handleNewGame: PropTypes.func.isRequired,
};

export default Win;
