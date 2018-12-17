import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 10V4.586L13.414.001H2c-1.103 0-2 .897-2 2v18c0 1.102.897 2 2 2h12V12c0-1.101.9-2 2-2h2zM5 17V9l8 4.002L5 17zm7-10.999V1l5 5h-5z" />
      <path d="M21 17.002h-2a1.001 1.001 0 0 1 0-2h4v-2h-2v-1h-2v1c-1.654 0-3 1.345-3 3 0 1.653 1.346 3 3 3h2a1 1 0 0 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.347 3-3 0-1.655-1.346-3-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
