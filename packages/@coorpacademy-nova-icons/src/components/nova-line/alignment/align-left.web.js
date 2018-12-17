import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 3h18v2H2zM2 7h14v2H2zM2 11h20v2H2zM2 15h14v2H2zM2 19h18v2H2z" />
    </g>
  </svg>
);

export default SvgComponent;
