import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ name, color, wide, clickHandler }) => (
  <button
    type="button"
    style={{ width: wide ? "50%" : "25%", background: color }}
    onClick={clickHandler.bind(null, name)}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  wide: false,
  color: "red",
};
export default Button;
