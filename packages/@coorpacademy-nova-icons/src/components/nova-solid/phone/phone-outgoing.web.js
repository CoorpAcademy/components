import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 4v2h4.586l-6.293 6.293 1.415 1.414L18 7.414V12h2V4z" />
      <path d="M18 16h-4a1 1 0 0 0-1 1v1c-4 0-6.937-3.062-7-7h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5c0 6.075 4.925 11 11 11h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
