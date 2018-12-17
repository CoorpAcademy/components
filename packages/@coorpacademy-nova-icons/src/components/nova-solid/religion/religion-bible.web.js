import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <g fill="currentColor">
      <path d="M6 2H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h2V2zM20 2H7v20h13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-2 8h-3v7h-2v-7h-3V8h3V5h2v3h3v2z" />
    </g>
  </svg>
);

export default SvgComponent;
