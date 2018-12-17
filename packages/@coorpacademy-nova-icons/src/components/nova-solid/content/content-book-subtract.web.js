import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 .001H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20zM18 15.102V1.001a1 1 0 0 0-1-1H6v20h8a5.002 5.002 0 0 1 4-4.899zM16 19.001h6v2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
