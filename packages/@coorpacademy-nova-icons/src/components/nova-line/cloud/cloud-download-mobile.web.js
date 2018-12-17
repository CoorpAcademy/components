import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .004h24v24H0z" />
    <g fill="currentColor">
      <path d="M15 0a6.963 6.963 0 0 0-6.438 4.254A4.915 4.915 0 0 0 7 4C4.243 4 2 6.243 2 9a5.007 5.007 0 0 0 4 4.898v-2.083A2.993 2.993 0 0 1 4 9c0-1.654 1.346-3 3-3 .569 0 1.129.167 1.619.482a1.002 1.002 0 0 0 1.516-.615A4.974 4.974 0 0 1 15 2c2.757 0 5 2.243 5 5 0 1.627-.793 3.061-2 3.975v2.34c2.361-1.126 4-3.529 4-6.314C22 3.141 18.859 0 15 0z" />
      <path d="M15 13H9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm-1 8h-4v-6h4v6zM12 12l3-3h-2V7h-2v2H9z" />
    </g>
  </svg>
);

export default SvgComponent;
