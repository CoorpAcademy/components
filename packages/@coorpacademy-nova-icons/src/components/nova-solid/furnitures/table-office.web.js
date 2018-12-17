import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M13 11v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8H13zm3 4a1 1 0 1 1-.002-1.998A1 1 0 0 1 16 15z" />
      <path d="M23 10V5a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v15h2V10h20zm-7-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM3 6h10v2H3V6z" />
    </g>
  </svg>
);

export default SvgComponent;
