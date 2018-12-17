import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 15.002l-2-2-3 4h10l-3-6z" />
      <circle cx={7} cy={10.002} r={2} />
      <path d="M2 2.001h10v4h4v8.001h2V4.587L13.414.001H2c-1.103 0-2 .897-2 2v18c0 1.103.897 2 2 2h12v-2H2v-18zM21 19v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
