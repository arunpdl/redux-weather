import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = ({ text, disabled, handleSubmit }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={handleSubmit}
      data-test="buttonComponent"
    >
      {text}
    </button>
  );
};

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default ButtonComponent;
