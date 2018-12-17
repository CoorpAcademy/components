import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={4} r={1} />
      <path d="M15 3h7v2h-7z" />
      <circle cx={12} cy={8} r={1} />
      <path d="M15 7h7v2h-7z" />
      <circle cx={12} cy={12} r={1} />
      <path d="M15 11h7v2h-7z" />
      <path d="M13 22h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1c-4 0-6.937-3.062-7-7h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5c0 6.075 4.925 11 11 11z" />
    </g>
  </svg>
);

export default SvgComponent;
