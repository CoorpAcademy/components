import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 12.05a2.5 2.5 0 1 0 2 2.45V9.388l2.632.877.633-1.898L8 6.612v5.438z" />
      <path d="M2 2h10v4h4v9.005h2V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h11v-2H2V2z" />
      <path d="M22.293 16.298L18 20.591l-2.293-2.293-1.414 1.414L18 23.419l5.707-5.707z" />
    </g>
  </svg>
);

export default SvgComponent;
