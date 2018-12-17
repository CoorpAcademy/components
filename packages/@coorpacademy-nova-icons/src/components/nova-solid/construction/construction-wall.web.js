import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 14h2v-2h2v2h2v-2h2v2h2v-2h2v-2h-2V8h2V6h-2V4h-2v2h-2V4H8v2H6V4H4v2H2v2h2v2H2v2h2v2zm8-6v2h-2V8h2zM6 8h2v2H6V8z" />
      <path d="M21 4h-4v11H2v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
