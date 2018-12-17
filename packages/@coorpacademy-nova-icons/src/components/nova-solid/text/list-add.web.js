import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={1} cy={2.998} r={1} />
      <path d="M4 1.998h14v2H4z" />
      <circle cx={1} cy={6.998} r={1} />
      <path d="M4 5.998h14v2H4z" />
      <circle cx={1} cy={10.998} r={1} />
      <path d="M4 9.998h14v2H4z" />
      <circle cx={1} cy={14.998} r={1} />
      <path d="M4 13.998h10v2H4zM24 16.998h-3v-3h-2v3h-3v2h3v3h2v-3h3z" />
    </g>
  </svg>
);

export default SvgComponent;
