import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 10h-2v5l2-1z" />
      <path d="M22 8V6h-2a2 2 0 0 0-2-2h-1V2h-2v2h-2V2h-2v2H9V2H7v2H6a2 2 0 0 0-2 2H2v2h2v3H2v2h2v3H2v2h2a2 2 0 0 0 2 2h1v2h2v-2h2v2h2v-2h2v2h2v-2h1a2 2 0 0 0 2-2h2v-2h-2v-3h2v-2h-2V8h2zm-6 7l-4 2-4-2V8h8v7z" />
    </g>
  </svg>
);

export default SvgComponent;
