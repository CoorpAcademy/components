import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M3 9h11v2H3z" />
      <path d="M19 2h-2a2 2 0 0 0-2 2v8H3a5 5 0 0 0 5 5h3.5l-.39 3.9a1.003 1.003 0 0 0 .995 1.1H20a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2zm-1 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
    </g>
  </svg>
);

export default SvgComponent;
