import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={16.001} r={2} />
      <path d="M16 2.001H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2zm-4 18c-2.206 0-4-1.795-4-4s1.794-4 4-4 4 1.795 4 4-1.794 4-4 4zm4-10H8v-6h8v6z" />
    </g>
  </svg>
);

export default SvgComponent;
