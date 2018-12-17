import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={5.002} r={2} />
      <circle cx={12} cy={12.002} r={2} />
      <circle cx={12} cy={19.001} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
