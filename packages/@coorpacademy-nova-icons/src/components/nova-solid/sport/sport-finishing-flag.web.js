import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <g fill="currentColor">
      <path d="M10 7h3v3h-3z" />
      <path d="M2 2v20h2v-7h17V2H2zm17 5h-3v3h3v3h-3v-3h-3v3h-3v-3H7v3H4v-3h3V7H4V4h3v3h3V4h3v3h3V4h3v3z" />
    </g>
  </svg>
);

export default SvgComponent;
