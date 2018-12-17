import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M11 8h2V5h3V3H8v2h3zM16 9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2v1h2v-1h4v1h2v-1a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zm0 4v2h-1v-2H8v-1h8v1z" />
    </g>
  </svg>
);

export default SvgComponent;
