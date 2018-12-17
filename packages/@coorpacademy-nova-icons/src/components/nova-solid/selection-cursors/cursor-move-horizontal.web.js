import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={12} r={2} />
      <path d="M2 12l5 4V8zM22 12l-5 4V8z" />
    </g>
  </svg>
);

export default SvgComponent;
