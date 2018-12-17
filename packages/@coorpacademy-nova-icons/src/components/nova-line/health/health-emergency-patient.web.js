import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M11 4.001v-2H9v2H5v-2H3v2a1 1 0 0 0-1 1V19a1 1 0 0 0 1 1v2h2v-2h4v2h2v-2a1 1 0 0 0 1-1V5.001a1 1 0 0 0-1-1zM10 11H4V6.001h6V11zm-6 2h6v5H4v-5z" />
      <circle cx={7} cy={9} r={2} />
      <path d="M22 9h-3V6.001h-2V9h-3v2h3v3h2v-3h3z" />
    </g>
  </svg>
);

export default SvgComponent;
