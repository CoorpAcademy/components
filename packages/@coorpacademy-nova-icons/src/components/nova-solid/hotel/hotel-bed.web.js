import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M21 12h-1a1 1 0 0 0-1 1v1H5V8a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h14v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z" />
      <path d="M12 12a2 2 0 0 0-2-2H6v3h6v-1z" />
    </g>
  </svg>
);

export default SvgComponent;
