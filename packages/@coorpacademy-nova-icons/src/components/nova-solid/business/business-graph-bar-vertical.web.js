import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 19V3.001H3V21h18v-2z" />
      <path d="M16 6.001h4V18h-4zM11 12h4v6h-4zM6 10h4v8H6z" />
    </g>
  </svg>
);

export default SvgComponent;
