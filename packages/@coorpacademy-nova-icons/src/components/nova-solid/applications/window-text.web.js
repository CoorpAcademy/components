import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 7.002V5c0-1.103-.896-2-2-2H4c-1.103 0-2 .897-2 2v2.002h20zM8 4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM5 4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM2 8.002V19c0 1.104.897 2 2 2h16a2 2 0 0 0 2-2V8.002H2zm14 6.001h-2v-1h-1v6h-2v-6h-1v1H8v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2z" />
    </g>
  </svg>
);

export default SvgComponent;
