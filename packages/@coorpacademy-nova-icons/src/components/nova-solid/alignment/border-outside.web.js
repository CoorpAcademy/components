import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 7.003h2v2h-2zM7 11.003h2v2H7zM11 11.003h2v2h-2zM11 15.003h2v2h-2zM15 11.003h2v2h-2z" />
      <path d="M3 3.003v18h18v-18H3zm16 16H5v-14h14v14z" />
    </g>
  </svg>
);

export default SvgComponent;
