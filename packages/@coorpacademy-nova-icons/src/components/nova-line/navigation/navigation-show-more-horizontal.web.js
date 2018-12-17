import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={5} cy={12} r={2} />
      <circle cx={12} cy={12} r={2} />
      <circle cx={19} cy={12} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
