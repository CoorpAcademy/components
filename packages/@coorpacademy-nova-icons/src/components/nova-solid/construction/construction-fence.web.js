import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M15 6h-4l-2 8h4z" />
      <path d="M21 6h-1V3h-2v3l-2 8h2v4H6v-4l2-8H6V3H4v3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v9h2v-3h12v3h2v-9h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
