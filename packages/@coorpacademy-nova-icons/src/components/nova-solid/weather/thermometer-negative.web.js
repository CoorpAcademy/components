import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 4.002h8v2h-8zM11 5.002a3 3 0 1 0-6 0v9.168a4.469 4.469 0 0 0-1.5 3.332 4.5 4.5 0 0 0 9 0A4.469 4.469 0 0 0 11 14.17V5.002zm-3 15a2.5 2.5 0 0 1-1-4.789V9.002h2v6.211a2.5 2.5 0 0 1-1 4.789z" />
    </g>
  </svg>
);

export default SvgComponent;
