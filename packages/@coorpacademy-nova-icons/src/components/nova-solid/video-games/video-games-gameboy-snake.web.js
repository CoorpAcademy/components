import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24.002H0z" />
    <g fill="currentColor">
      <path d="M8.998 5.998h1v1h-1z" />
      <path d="M17.998 1.998h-12c-1.104 0-2 .897-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-16c0-1.103-.896-2-2-2zm-11 3h10v7h-6v-2h4v-4h-3v1h2v2h-4v3h-3v-7zm5 13h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2zm3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </g>
  </svg>
);

export default SvgComponent;
