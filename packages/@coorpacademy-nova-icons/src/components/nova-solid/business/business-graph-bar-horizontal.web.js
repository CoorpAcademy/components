import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 19V3.001H3V21h18v-2z" />
      <path d="M6 14h12v4H6zM6 9h6v4H6zM6 4.001h8V8H6z" />
    </g>
  </svg>
);

export default SvgComponent;
