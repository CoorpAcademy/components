import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 10.001H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zM14 6.001h-4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1zM21 11.001h-4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
