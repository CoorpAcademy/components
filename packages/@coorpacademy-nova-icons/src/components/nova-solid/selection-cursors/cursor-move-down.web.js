import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={6.002} r={4} />
      <path d="M13 12.002h-2v3.999H8l4 6 4-6h-3z" />
    </g>
  </svg>
);

export default SvgComponent;
