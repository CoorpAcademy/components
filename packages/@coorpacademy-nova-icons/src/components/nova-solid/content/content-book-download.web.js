import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 .001H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20zM6 20.001h6.079a7 7 0 0 1-.079-.999c0-3.526 2.609-6.434 6-6.92V1.001a1 1 0 0 0-1-1H6v20zM22.293 17.294L20 19.587v-5.586h-2v5.586l-2.293-2.293-1.414 1.414L19 23.415l4.707-4.707z" />
    </g>
  </svg>
);

export default SvgComponent;
