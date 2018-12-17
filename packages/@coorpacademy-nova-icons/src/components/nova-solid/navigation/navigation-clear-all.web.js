import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 16h14v3H3zM5 11h14v3H5zM7 6.001h14v3H7z" />
    </g>
  </svg>
);

export default SvgComponent;
