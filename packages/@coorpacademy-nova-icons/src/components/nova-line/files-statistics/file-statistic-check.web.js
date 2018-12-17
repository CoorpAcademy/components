import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 15.004h-1v-3H8v3H7v-7H5v7H4v2h9v-7h-2z" />
      <path d="M2 2.002h10v4h4v9.002h2V4.587L13.414.002H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h11v-2H2v-18z" />
      <path d="M22.293 16.298L18 20.591l-2.293-2.293-1.414 1.414L18 23.419l5.707-5.707z" />
    </g>
  </svg>
);

export default SvgComponent;
