import PropTypes from 'prop-types';

import '../styles/Stats.css';

function Stats(props) {
  const { stats } = props;

  return (
    <div className="Stats">
      {stats.state !== 'newgame' ? (
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
  stats: PropTypes.shape({
    state: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    highscore: PropTypes.number.isRequired,
  }).isRequired,
};

export default Stats;
