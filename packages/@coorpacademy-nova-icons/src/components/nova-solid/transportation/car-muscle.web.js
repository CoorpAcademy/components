import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24V24H0z" />
    <g fill="currentColor">
      <circle cx={19} cy={19} r={2} />
      <circle cx={5} cy={19} r={2} />
      <path d="M22 13s-3-4-10-4l-2 4H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h1a3.001 3.001 0 0 1 6 0h8a3.001 3.001 0 0 1 6 0h1a1 1 0 0 0 1-1v-3a2 2 0 0 0-2-2zm-10 0l1-2h2c1.104 0 4 1 4 2h-7z" />
      <path d="M8 12v-2H3l1 2z" />
    </g>
  </svg>
);

export default SvgComponent;
