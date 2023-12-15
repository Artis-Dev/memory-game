import PropTypes from 'prop-types';

import '../styles/Button.css';

function Button(props) {
  const { handleClick, title } = props;

  return (
    <button onClick={handleClick} type="button" className="Button">
      {title}
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
