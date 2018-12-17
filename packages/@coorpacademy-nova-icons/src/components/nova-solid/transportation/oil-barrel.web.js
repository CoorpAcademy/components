import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M19 5a1 1 0 0 0-1-1h-8V2H7v2H6a1 1 0 0 0-1 1v4h14V5zM4 16v2h1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3h1v-2H4zM4 10v2h1v3h14v-3h1v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
