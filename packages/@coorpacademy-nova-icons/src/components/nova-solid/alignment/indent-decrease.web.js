import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 3.003h15v2H7zM14 7.003h8v2h-8zM14 11.003h8v2h-8zM14 15.003h8v2h-8zM7 19.003h15v2H7zM2 12.003l6 6v-2h4v-8H8v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
