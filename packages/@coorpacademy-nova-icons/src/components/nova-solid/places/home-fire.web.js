import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M13 .72L2.375 9.219l1.25 1.562L13 3.281l9.375 7.5 1.25-1.562z" />
      <path d="M13 14V7s-5 5-5 9a5 5 0 1 0 10 0c0-2-2-5-2-5l-3 3z" />
    </g>
  </svg>
);

export default SvgComponent;
