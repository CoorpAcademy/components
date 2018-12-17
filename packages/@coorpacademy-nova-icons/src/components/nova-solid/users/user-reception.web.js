import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21.001 13h-18v2H6.22l2 8h7.562l2-8h3.219z" />
      <circle cx={12.001} cy={4} r={3} />
      <path d="M17.001 12c0-2.757-2.243-5-5-5s-5 2.243-5 5h10z" />
    </g>
  </svg>
);

export default SvgComponent;
