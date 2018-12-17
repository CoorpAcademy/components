import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
      <path d="M3.25 11.625v1.75A2.628 2.628 0 0 0 5.875 16H8.5v-1.75H5.875A.876.876 0 0 1 5 13.375v-1.75c0-.482.393-.875.875-.875H8.5V9H5.875a2.629 2.629 0 0 0-2.625 2.625zM12.875 9.875h-1.75v1.75h-1.75v1.75h1.75v1.75h1.75v-1.75h1.75v-1.75h-1.75zM19 9.875h-1.75v1.75H15.5v1.75h1.75v1.75H19v-1.75h1.75v-1.75H19z" />
    </g>
  </svg>
);

export default SvgComponent;
