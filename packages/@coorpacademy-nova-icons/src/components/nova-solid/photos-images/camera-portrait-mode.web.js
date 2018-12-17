import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 2h20v2H2zM2 20h20v2H2zM2 6.001v12h20v-12H2zM12 8a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 8zm-3 8a3 3 0 1 1 6 0H9z" />
    </g>
  </svg>
);

export default SvgComponent;
