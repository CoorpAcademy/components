import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M23 8h-8a1 1 0 0 0-1 1v3h2v-2h2v10h-2v2h6v-2h-2V10h2v2h2V9a1 1 0 0 0-1-1z" />
      <path d="M9 4h5v2h2V3a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v3h2V4h5v16H4v2h8v-2H9V4z" />
    </g>
  </svg>
);

export default SvgComponent;
