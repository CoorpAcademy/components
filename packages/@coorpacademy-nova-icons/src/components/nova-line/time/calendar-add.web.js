import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 8h15.999l-.001 6H20V5c0-1.102-.897-2-2-2h-1V0h-2v5h-1V3H7V0H5v5H4V3H2C.897 3 0 3.898 0 5v13c0 1.103.897 2 2 2h12v-2H2V8zM24 19h-3v-3h-2v3h-3v2h3v3h2v-3h3z" />
    </g>
  </svg>
);

export default SvgComponent;
