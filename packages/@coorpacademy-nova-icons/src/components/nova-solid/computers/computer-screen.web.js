import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M24 16V5c0-1.103-.897-2-2-2H2C.897 3 0 3.897 0 5v11h24zM0 17v1c0 1.103.897 2 2 2h9v2H7v2h10v-2h-4v-2h9c1.103 0 2-.897 2-2v-1H0z" />
    </g>
  </svg>
);

export default SvgComponent;
