import PropTypes from 'prop-types';

import '../styles/Button.css';

function Button(props) {
  const { handleClick } = props;

  return (
    <button onClick={handleClick} type="button" className="Button">
      Start
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
