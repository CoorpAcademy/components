import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M21.193 6.344a2.989 2.989 0 0 0-2.719-.816 3 3 0 1 0-5.059 1.523l-6.364 6.364a3 3 0 1 0-1.523 5.059 2.997 2.997 0 0 0 5.059 2.719 3.001 3.001 0 0 0 0-4.243l6.364-6.364a3 3 0 1 0 4.242-4.242z"
    />
  </svg>
);

export default SvgComponent;
