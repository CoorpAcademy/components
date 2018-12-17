import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8.002 4h8v4h2V2h-12v6h2z" />
      <path d="M20.002 7v2h-16V7c-1.294 0-2 .896-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 14h-16V11h16v10z" />
      <path d="M17.002 19h1v-2h-1c-.551 0-1-.448-1-1v-4h-2v4c0 1.654 1.346 3 3 3zM10.002 16v-4h-2v4c0 .552-.449 1-1 1h-1v2h1c1.655 0 3-1.346 3-3zM11.002 12h2v7h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
