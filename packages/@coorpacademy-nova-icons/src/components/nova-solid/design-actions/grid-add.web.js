import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 16h4v4h-4zM10 14h4v-3.537a5.78 5.78 0 0 1-.463-.463H10v4z" />
      <path d="M16 22H2V8h10.349A5.97 5.97 0 0 1 12 6H0v18h18V12a5.97 5.97 0 0 1-2-.349V22z" />
      <path d="M4 16h4v4H4zM4 10h4v4H4zM19 5V2h-2v3h-3v2h3v3h2V7h3V5z" />
    </g>
  </svg>
);

export default SvgComponent;
