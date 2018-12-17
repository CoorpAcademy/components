import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={6} cy={8} r={3} />
      <circle cx={16} cy={18} r={3} />
      <path d="M14 3v2h3.586L2.293 20.293l1.414 1.413L19 6.415V10h2V3z" />
    </g>
  </svg>
);

export default SvgComponent;
