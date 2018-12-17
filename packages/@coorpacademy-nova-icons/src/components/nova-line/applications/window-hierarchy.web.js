import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 2H3c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20V8h17.999l-.002 12H3z" />
      <path d="M17 14a1 1 0 0 0-1-1h-3v-1h1v-2h-4v2h1v1H8a1 1 0 0 0-1 1v2H6v2h3v-3h2v1h-1v2h4v-2h-1v-1h2v3h3v-2h-1v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
