import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M2 2h20v2H2zM21 19H3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zM21 5H3v13h18V5zm-7 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM6 7h5v2H6V7zm12 8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3zm-1-6a1 1 0 1 1-.002-1.998A1 1 0 0 1 17 9z" />
    </g>
  </svg>
);

export default SvgComponent;
