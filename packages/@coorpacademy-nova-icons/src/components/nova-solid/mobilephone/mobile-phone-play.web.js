import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.005h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 17v1H4V6h8v1h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3h-2z" />
      <path d="M17 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-1 6v-4l3 2-3 2z" />
    </g>
  </svg>
);

export default SvgComponent;
