import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M4 5.5a1.5 1.5 0 0 1 3 0V7h2V5.5a1.5 1.5 0 0 1 3 0V7h2V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4h2V5.5zM4 12.5a1.5 1.5 0 0 1 3 0V14h2v-1.5a1.5 1.5 0 0 1 3 0V14h2v-1.5a1.5 1.5 0 0 1 3 0V14h2v-4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4h2v-1.5zM21 16H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v-1.5a1.5 1.5 0 0 1 3 0V22h2v-1.5a1.5 1.5 0 0 1 3 0V22h2v-1.5a1.5 1.5 0 0 1 3 0V22h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
