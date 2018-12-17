import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M11 4V2H9v2H5V2H3v2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1v2h2v-2h4v2h2v-2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 7H4V6h6v5z" />
      <circle cx={7} cy={9} r={2} />
      <path d="M22 9h-3V6h-2v3h-3v2h3v3h2v-3h3z" />
    </g>
  </svg>
);

export default SvgComponent;
