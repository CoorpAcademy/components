import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zM4 5h16v1H4V5zm15 13H5V8h14v10z" />
      <path d="M18 17v-2h-1v-5h-3V9H9v2H8V9H6v8h12zm-3-5v3h-1v-3h1zm-3-1v4h-1v-4h1zm-4 4v-2h1v2H8z" />
    </g>
  </svg>
);

export default SvgComponent;
