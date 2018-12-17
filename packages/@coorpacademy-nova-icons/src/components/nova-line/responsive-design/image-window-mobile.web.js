import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 0h-6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm-1 2v6h-4V2h4z" />
      <path d="M20 22H2V10h11V8H2V6h11V4H2C.897 4 0 4.898 0 6v16c0 1.104.897 2 2 2h18c1.103 0 2-.896 2-2v-8h-2v8z" />
      <path d="M17 20l-4-6-3 4-2-2-3 4z" />
      <circle cx={7} cy={13} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
