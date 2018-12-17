import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zM12 18a5 5 0 1 1 0-10 5 5 0 1 1 0 10zm8-12H4V5h16v1z" />
      <path d="M13 9h-2v5h4v-2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
