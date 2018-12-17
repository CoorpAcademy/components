import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <circle cx={18} cy={12.002} r={4} />
      <path d="M2 12.002l9 3.999-2-3.999 2-4z" />
    </g>
  </svg>
);

export default SvgComponent;
