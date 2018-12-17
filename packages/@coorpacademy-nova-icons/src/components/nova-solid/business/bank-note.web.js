import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 5v14h20V5H2zm7 12l-5-5V7h11l5 5v5H9z" />
      <circle cx={12} cy={12} r={3} />
    </g>
  </svg>
);

export default SvgComponent;
