import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6.143 17L19 5l-2-2L2 17v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2H6.143zM14 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      <path d="M10 16h11v-2h-9z" />
    </g>
  </svg>
);

export default SvgComponent;
