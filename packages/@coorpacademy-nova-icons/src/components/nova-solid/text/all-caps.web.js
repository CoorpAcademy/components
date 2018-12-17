import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 6H2a1 1 0 0 0-1 1v3h2V8h2v10H3v2h6v-2H7V8h2v2h2V7a1 1 0 0 0-1-1zM22 6h-8a1 1 0 0 0-1 1v3h2V8h2v10h-2v2h6v-2h-2V8h2v2h2V7a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
