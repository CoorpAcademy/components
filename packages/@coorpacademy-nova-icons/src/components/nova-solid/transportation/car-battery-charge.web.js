import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M4 3h4v2H4zM16 3h4v2h-4zM21 6H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM11 17v-4H8l4-5v4h3l-4 5z" />
    </g>
  </svg>
);

export default SvgComponent;
