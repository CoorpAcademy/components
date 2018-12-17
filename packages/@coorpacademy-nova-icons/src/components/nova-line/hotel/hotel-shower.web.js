import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M18 1H9a2 2 0 0 0-2 2v2h2V3h9c.551 0 1 .449 1 1v14h-1v-1h-2v4h2v-1h1v3h2V4c0-1.654-1.346-3-3-3z" />
      <circle cx={8} cy={8} r={1} />
      <circle cx={6} cy={10.5} r={1} />
      <circle cx={10} cy={10.5} r={1} />
      <circle cx={8} cy={13} r={1} />
      <circle cx={4} cy={13} r={1} />
      <circle cx={12} cy={13} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
