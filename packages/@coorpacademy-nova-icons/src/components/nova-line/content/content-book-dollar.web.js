import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 18.001H6v-16h10v8h2v-9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h13v-2zm-10 0H2v-16h2v16zM21 17.001h-2c-.551 0-1-.449-1-1s.449-1 1-1h4v-2h-2v-1h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2c.551 0 1 .449 1 1s-.449 1-1 1h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
