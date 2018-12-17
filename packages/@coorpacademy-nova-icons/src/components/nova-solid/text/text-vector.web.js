import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 6H8a1 1 0 0 0-1 1v2h2V8h2v8H9v2h6v-2h-2V8h2v1h2V7a1 1 0 0 0-1-1zM5 0H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zM23 0h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zM5 18H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM23 18h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM2 7h2v10H2zM7 2h10v2H7zM20 7h2v10h-2zM7 20h10v2H7z" />
    </g>
  </svg>
);

export default SvgComponent;
