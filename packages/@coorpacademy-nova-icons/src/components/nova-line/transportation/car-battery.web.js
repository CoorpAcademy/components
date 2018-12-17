import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 12h5v2H5zM15 16h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
      <path d="M21 7h-1V5h-4v2H8V5H4v2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-1 10H4V9h16v8z" />
    </g>
  </svg>
);

export default SvgComponent;
