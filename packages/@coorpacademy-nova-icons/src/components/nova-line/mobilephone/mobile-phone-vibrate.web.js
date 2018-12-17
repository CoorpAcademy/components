import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 9.999h2v7h-2zM2 6.999h2v7H2zM16 1.999H8c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-16c0-1.103-.897-2-2-2zm0 2v2H8v-2h8zm0 4v8H8v-8h8zm-8 12v-2h8.001v2H8z" />
    </g>
  </svg>
);

export default SvgComponent;
