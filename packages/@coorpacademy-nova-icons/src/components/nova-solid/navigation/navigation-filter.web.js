import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path fill="currentColor" d="M18 22H3a1 1 0 0 1-1-1V6h2v14h14v2z" />
    <g fill="currentColor">
      <path d="M15 7.001h2v6h-2z" />
      <path d="M21 2H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-9 13h-2V5h2v10zm7-1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8z" />
    </g>
  </svg>
);

export default SvgComponent;
