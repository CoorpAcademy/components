import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 3.003c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm0 15a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
      <circle cx={12} cy={12.003} r={3} />
    </g>
  </svg>
);

export default SvgComponent;
