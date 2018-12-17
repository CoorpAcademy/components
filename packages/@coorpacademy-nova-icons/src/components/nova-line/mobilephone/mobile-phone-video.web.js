import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.005h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 11V9h-6v6h6v-2l3 1v-4z" />
      <path d="M4 16V8h10V4c0-1.104-.897-2-2-2H4c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-4H4zm8-12v2H4V4h8zM4 20v-2h8v2H4z" />
    </g>
  </svg>
);

export default SvgComponent;
