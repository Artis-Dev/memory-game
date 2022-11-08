import PropTypes from 'prop-types';

import '../styles/NewGame.css';

import Description from './Description';
import Difficulty from './Difficulty';

function NewGame(props) {
  const { handleNewGame } = props;

  return (
    <div className="NewGame">
      <Description />
      <Difficulty handleNewGame={handleNewGame} />
    </div>
  );
}

NewGame.propTypes = {
  handleNewGame: PropTypes.func.isRequired,
};

export default NewGame;
