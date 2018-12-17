import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 14.001h2v6h-2z" />
      <circle cx={21} cy={21.999} r={1} />
      <path d="M2 0C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4.586L13.414 0H2zm3.5 8a2.5 2.5 0 1 1-.002 5.002A2.5 2.5 0 0 1 5.5 8zM3 19l3-4 2 2 4-5 3 7H3zm9-13V1l5 5h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
