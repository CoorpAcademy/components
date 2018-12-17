import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 18H2V8h15.999l-.001 6H20V5c0-1.102-.897-2-2-2h-1V0h-2v5h-1V3H7V0H5v5H4V3H2C.897 3 0 3.898 0 5v13c0 1.103.897 2 2 2h12v-2z" />
      <path d="M23.707 17.707l-1.414-1.414L20 18.586l-2.293-2.293-1.414 1.414L18.586 20l-2.293 2.293 1.414 1.414L20 21.414l2.293 2.293 1.414-1.414L21.414 20z" />
    </g>
  </svg>
);

export default SvgComponent;
