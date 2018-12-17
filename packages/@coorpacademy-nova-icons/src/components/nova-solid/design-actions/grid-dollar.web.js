import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 10h4v4h-4zM4 10h4v4H4zM10 16h4v4h-4z" />
      <path d="M16 22H2V8h10V6H0v18h18V14h-2z" />
      <path d="M4 16h4v4H4zM19 5h-2a1 1 0 1 1 0-2h4V1h-2V0h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2a1.001 1.001 0 0 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
