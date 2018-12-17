import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 16h14v3H5zM5 11h14v3H5zM5 6.001h14v3H5z" />
    </g>
  </svg>
);

export default SvgComponent;
