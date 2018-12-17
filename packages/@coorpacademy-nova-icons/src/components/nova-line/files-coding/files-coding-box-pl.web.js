import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
      <path d="M9.375 9H6.75v7H8.5v-1.75h.875A2.628 2.628 0 0 0 12 11.625 2.629 2.629 0 0 0 9.375 9zm0 3.5H8.5v-1.75h.875a.876.876 0 0 1 0 1.75zM14.625 9h-1.75v7h4.375v-1.75h-2.625z" />
    </g>
  </svg>
);

export default SvgComponent;
