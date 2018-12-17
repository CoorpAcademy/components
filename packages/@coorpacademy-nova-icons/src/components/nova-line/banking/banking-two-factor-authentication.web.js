import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5.707 8.294L4.293 9.708 7 12.414l5.707-5.706-1.414-1.414L7 9.586z" />
      <path d="M10 17h2v-2H2V4h14l-.002 5H18V4c0-1.103-.896-2-2-2H2C.896 2 0 2.897 0 4v11c0 1.103.896 2 2 2h6v2H5v2h8v-2h-3v-2z" />
      <path d="M21 22h-5v-9h4v-2h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-4h-2v3z" />
      <path d="M17.707 15.294l-1.414 1.414L19 19.414l4.707-4.706-1.414-1.414L19 16.586z" />
    </g>
  </svg>
);

export default SvgComponent;
