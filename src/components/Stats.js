import PropTypes from 'prop-types';

import '../styles/Stats.css';

function Stats(props) {
  const { newGame, stats } = props;

  return (
    <div className="Stats">
      {!newGame ? (
        <>
          <span>Level: {stats.level}</span>
          <span>Score: {stats.score}</span>
        </>
      ) : null}
      <span>Highscore: {stats.highscore}</span>
    </div>
  );
}

Stats.propTypes = {
  newGame: PropTypes.bool.isRequired,
  stats: PropTypes.shape({
    mode: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    highscore: PropTypes.number.isRequired,
  }).isRequired,
};

export default Stats;
