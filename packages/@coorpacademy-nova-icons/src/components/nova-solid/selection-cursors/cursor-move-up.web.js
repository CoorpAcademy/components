import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={18.001} r={4} />
      <path d="M11 12.002h2v-4h3l-4-6.001-4 6.001h3z" />
    </g>
  </svg>
);

export default SvgComponent;
