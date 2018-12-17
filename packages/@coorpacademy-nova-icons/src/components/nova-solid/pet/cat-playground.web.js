import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M9 2v2h1.25v2.148a2 2 0 1 0 1.5 0V4H24V2H9zM7 15v7h3v-2a2 2 0 0 1 4 0v2h3v-7H7zM2 15h4v7H2z" />
      <path d="M18 5v7H0v2h18v8h4V5z" />
    </g>
  </svg>
);

export default SvgComponent;
