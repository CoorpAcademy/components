import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 8h4v2h-4zM3 8h7v2H3zM3 11h5v2H3z" />
      <path d="M2 7h15.999l-.002 7H20V2c0-1.102-.896-2-2-2H2C.897 0 0 .898 0 2v12c0 1.103.897 2 2 2h13v-2H2V7zm16-5l-.001 3H2V2h16zM23.707 17.707l-1.414-1.414L20 18.586l-2.293-2.293-1.414 1.414L18.586 20l-2.293 2.293 1.414 1.414L20 21.414l2.293 2.293 1.414-1.414L21.414 20z" />
    </g>
  </svg>
);

export default SvgComponent;
