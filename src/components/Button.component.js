import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  onClick,
  onTouchCancel,
  onTouchEnd,
  onTouchMove,
  onTouchStart,
  text,
  className,
}) => (
  <button
    type="button"
    onTouchCancel={onTouchCancel}
    onTouchEnd={onTouchEnd}
    onTouchMove={onTouchMove}
    onTouchStart={onTouchStart}
    onClick={onClick}
    className={className}
  >
    <p className="buttonText">
      {' '}
      {text}
    </p>
  </button>
);


Button.propTypes = {
  onClick: PropTypes.func,
  onTouchCancel: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onTouchMove: PropTypes.func,
  onTouchStart: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  onTouchCancel: () => {},
  onTouchEnd: () => {},
  onTouchMove: () => {},
  onTouchStart: () => {},
  text: '',
  className: '',
};
export default Button;
