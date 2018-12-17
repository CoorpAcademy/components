import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zM4 5h16v1H4V5zm15 13H5V8h14v10z" />
      <path d="M15 12a3.001 3.001 0 0 0-6 0c0 2 3 5 3 5s3-3 3-5zm-4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
    </g>
  </svg>
);

export default SvgComponent;
