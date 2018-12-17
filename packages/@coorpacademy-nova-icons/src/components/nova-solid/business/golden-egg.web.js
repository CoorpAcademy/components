import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 18H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM18.066 17c.769-1.215 1.193-2.731 1.193-4.476C19.26 7.658 16.088 2 12 2 7.915 2 4.747 7.656 4.747 12.521c0 1.746.425 3.263 1.193 4.479h12.126zM9 12h3.5a.5.5 0 0 0 0-1h-1A2.503 2.503 0 0 1 9 8.5c0-1.207.86-2.217 2-2.449V5h2v1h2v2h-3.5a.5.5 0 0 0 0 1h1c1.379 0 2.5 1.122 2.5 2.5 0 1.208-.86 2.218-2 2.45V15h-2v-1H9v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
