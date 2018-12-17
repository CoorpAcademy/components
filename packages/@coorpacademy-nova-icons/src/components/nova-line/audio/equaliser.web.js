import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 19h5v3H2zM9 19h5v3H9zM16 19h5v3h-5zM2 14h5v3H2zM9 14h5v3H9zM16 14h5v3h-5zM2 9h5v3H2zM9 9h5v3H9zM9 4h5v3H9z" />
    </g>
  </svg>
);

export default SvgComponent;
