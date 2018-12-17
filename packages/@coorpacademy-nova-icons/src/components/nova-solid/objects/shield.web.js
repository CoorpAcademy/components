import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.478 10-10S17.523 2 12 2zm0 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
      <path d="M13 11l-1-3-1 3H8l2 2-1 3 3-2 3 2-1-3 2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
