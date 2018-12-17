import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 2l2 8h10l2-8zM7 18a2 2 0 0 0 2 2v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a2 2 0 0 0 2-2v-2H7v2zM7 12h10v2H7z" />
    </g>
  </svg>
);

export default SvgComponent;
