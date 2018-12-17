import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 6H2v15a1 1 0 0 0 1 1h15v-2H4V6z" />
      <path d="M21 2H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 14H8V4h12v12z" />
      <path d="M11 14h2v-2h2v-2h-2V8h-2v2H9v2h2zM17 14h2V7a1 1 0 0 0-1-1h-3v2h2v6z" />
    </g>
  </svg>
);

export default SvgComponent;
