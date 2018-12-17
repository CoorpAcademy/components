import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 6.002H2c-1.103 0-2 .897-2 2v9c0 1.102.897 2 2 2h20c1.103 0 2-.898 2-2v-9c0-1.103-.897-2-2-2zm-20 11v-9h20l.001 9H2z" />
      <path d="M11.125 9.002h-3.5a.875.875 0 0 0-.875.875v6.125H8.5v-1.75h1.75v1.75H12V9.876a.875.875 0 0 0-.875-.874zm-.875 3.5H8.5v-1.75h1.75v1.75zM13.75 10.752h.875v3.5h-.875v1.75h3.5v-1.75h-.875v-3.5h.875v-1.75h-3.5z" />
    </g>
  </svg>
);

export default SvgComponent;
