import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M11 16l4-4h-3V9l-4 4h3z" />
      <path d="M21 6h-1V4h-4v2H8V4H4v2H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-1 11H4V8h16v9z" />
    </g>
  </svg>
);

export default SvgComponent;
