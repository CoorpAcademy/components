import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 8h4v2h-4zM3 8h7v2H3zM3 11h5v2H3z" />
      <path d="M2 7h15.999l-.001 3H20V2c0-1.102-.896-2-2-2H2C.896 0 0 .898 0 2v12c0 1.103.896 2 2 2h8v-2H2V7zm16-5l-.001 3H2V2h16z" />
      <path d="M23.414 22l-3.247-3.247A4.966 4.966 0 0 0 21 16c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833L22 23.415 23.414 22zM13 16c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
