import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 18H4v-8h1V8H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2h-2v1z" />
      <path d="M20 4H8c-1.103 0-2 .898-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V6c0-1.102-.897-2-2-2zm-2.12 2L14 8.77 10.12 6h7.76zM8 14V6.942l5.419 3.871a1 1 0 0 0 1.162 0L20 6.942 20.001 14H8z" />
    </g>
  </svg>
);

export default SvgComponent;
