import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 8.005v11.001c0 1.102.897 2 2 2h16c1.104 0 2-.898 2-2V8.005H2zm10 3.001l4 4h-3v3h-2v-3H8l4-4zM22 7.005V5.003a2 2 0 0 0-2-2H4c-1.103 0-2 .897-2 2v2.002h20zM8 4.003a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </g>
  </svg>
);

export default SvgComponent;
