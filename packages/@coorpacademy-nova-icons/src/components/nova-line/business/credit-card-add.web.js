import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 8h4v2h-4zM3 8h7v2H3zM3 11h5v2H3z" />
      <path d="M17 14H2V7h15.999l-.002 7H20V2c0-1.102-.896-2-2-2H2C.896 0 0 .898 0 2v12c0 1.103.896 2 2 2h15v-2zm1-12l-.001 3H2V2h16zM24 19h-3v-3h-2v3h-3v2h3v3h2v-3h3z" />
    </g>
  </svg>
);

export default SvgComponent;
