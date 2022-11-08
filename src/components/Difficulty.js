import PropTypes from 'prop-types';

import '../styles/Difficulty.css';

import Button from './Button';

function Difficulty(props) {
  const { handleNewGame } = props;

  return (
    <div className="Difficulty">
      <p>Select difficulty</p>
      <div className="buttons">
        <Button handleClick={() => handleNewGame('easy')} title="Adventurer" />
        <Button
          handleClick={() => handleNewGame('normal')}
          title="Battle-Hardened"
        />
        <Button handleClick={() => handleNewGame('hard')} title="Bonebreaker" />
      </div>
    </div>
  );
}

Difficulty.propTypes = {
  handleNewGame: PropTypes.func.isRequired,
};

export default Difficulty;
