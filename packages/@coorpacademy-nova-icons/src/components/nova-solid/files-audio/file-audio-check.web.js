import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 14.098V4.59L13.414.004H2c-1.103 0-2 .898-2 2v18c0 1.102.897 2 2 2h11.347A5.996 5.996 0 0 1 13 20.008a5.997 5.997 0 0 1 5-5.91zM12 1.004l5 5h-5v-5zm-2 9.385v6.112a2.5 2.5 0 1 1-2-2.45V7.615l5.265 1.754-.633 1.897L10 10.389z" />
      <path d="M22.293 16.301L18 20.594l-2.293-2.293-1.414 1.414L18 23.422l5.707-5.707z" />
    </g>
  </svg>
);

export default SvgComponent;
