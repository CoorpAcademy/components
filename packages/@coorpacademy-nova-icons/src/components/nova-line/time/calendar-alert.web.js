import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M20 14h2v6h-2z" />
    <circle cx={21} cy={22} r={1} fill="currentColor" />
    <path
      d="M17 18H2V8h15.999l-.001 4H20V5c0-1.102-.897-2-2-2h-1V0h-2v5h-1V3H7V0H5v5H4V3H2C.897 3 0 3.898 0 5v13c0 1.103.897 2 2 2h15v-2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
