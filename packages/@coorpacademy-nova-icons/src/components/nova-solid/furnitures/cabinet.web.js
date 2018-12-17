import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M21 7h-8v6h8V7zm-4 4a1 1 0 1 1-.002-1.998A1 1 0 0 1 17 11zM3 13h8V7H3v6zm4-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM21 2H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM3 14v8h2v-3h14v3h2v-8H3zm9 3a1 1 0 1 1-.002-1.998A1 1 0 0 1 12 17z" />
    </g>
  </svg>
);

export default SvgComponent;
