import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M13 12a2 2 0 0 0-2-2H7v3h6v-1z" />
      <path d="M22 12h-3a1 1 0 0 0-1 1v1H6V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm-1 8h-1v-1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1H3V9h1v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1h1v6z" />
    </g>
  </svg>
);

export default SvgComponent;
