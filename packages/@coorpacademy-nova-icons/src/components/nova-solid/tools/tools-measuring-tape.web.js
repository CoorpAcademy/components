import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M19 11h-3v2h3a1.001 1.001 0 0 1 0 2H6c-1.654 0-3 1.346-3 3s1.346 3 3 3h9v1h2v-2a1 1 0 0 0-1-1H6a1.001 1.001 0 0 1 0-2h13c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
      <path d="M14 14a1 1 0 0 0 1-1V9c0-3.86-3.141-7-7-7H4c-1.103 0-2 .898-2 2v9a1 1 0 0 0 1 1h11zM5 9h6v2H5V9z" />
    </g>
  </svg>
);

export default SvgComponent;
