import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <circle cx={6} cy={12.002} r={4} />
      <path d="M22 12.002l-6-4v3h-4v2h4v2.999z" />
    </g>
  </svg>
);

export default SvgComponent;
