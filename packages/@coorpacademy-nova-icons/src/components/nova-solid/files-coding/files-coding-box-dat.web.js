import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5.003 10.752v3.498a1.75 1.75 0 0 0 1.75-1.749c0-.964-.785-1.749-1.75-1.749zM11.126 10.75h1.75v1.749h-1.75z" />
      <path d="M22.001 6h-20a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM5.003 16H3.254V9.002h1.749c1.93 0 3.499 1.57 3.499 3.499A3.502 3.502 0 0 1 5.003 16zm9.622-.002h-1.749v-1.75h-1.75v1.75H9.377V9.875c0-.484.391-.875.875-.875h3.498c.484 0 .875.391.875.875v6.123zm6.123-5.246h-1.749V16h-1.75v-5.248H15.5v-1.75h5.248v1.75z" />
    </g>
  </svg>
);

export default SvgComponent;
