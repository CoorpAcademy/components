import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <g fill="currentColor">
      <path d="M21 2H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM5 4h1v16H5V4zm15 16H8V4h12v16z" />
      <path d="M10 12h3v5h2v-5h3v-2h-3V7h-2v3h-3z" />
    </g>
  </svg>
);

export default SvgComponent;
