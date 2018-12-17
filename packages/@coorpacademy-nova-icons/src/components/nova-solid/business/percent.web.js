import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={6} cy={6} r={3} />
      <circle cx={18} cy={18} r={3} />
      <path d="M3.293 19.294l16-16 1.413 1.414-16 16z" />
    </g>
  </svg>
);

export default SvgComponent;
