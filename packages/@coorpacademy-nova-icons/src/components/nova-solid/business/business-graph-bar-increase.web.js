import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 22h20v2H2zM10 13h4v8h-4zM16 9h4v12h-4zM4 17h4v4H4zM3.707 14.708L15 3.415V6h2V0h-6v2h2.586L2.293 13.294z" />
    </g>
  </svg>
);

export default SvgComponent;
