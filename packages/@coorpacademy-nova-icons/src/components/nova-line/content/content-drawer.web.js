import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 2H6c-1.104 0-2 .898-2 2v16c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2V4c0-1.102-.896-2-2-2zm-.003 18H6V4h12l-.003 16z" />
      <path d="M17 5H7v14h10V5zm-6 2v1h2V7h2v2H9V7h2zm-2 6v-2h2v1h2v-1h2v2H9zm0 4v-2h2v1h2v-1h2v2H9z" />
    </g>
  </svg>
);

export default SvgComponent;
