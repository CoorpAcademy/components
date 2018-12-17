import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M14 18H2V8h15.999l-.001 2H20V5c0-1.102-.896-2-2-2h-1V0h-2v5h-1V3H7V0H5v5H4V3H2C.897 3 0 3.898 0 5v13c0 1.103.897 2 2 2h12v-2z"
      fill="currentColor"
    />
    <path
      d="M21 21h-2v-3h1c1.104 0 2-.897 2-2 0-1.102-.896-2-2-2s-2 .898-2 2h-2c0-2.206 1.795-4 4-4s4 1.794 4 4a4.01 4.01 0 0 1-3 3.874V21z"
      fill="currentColor"
    />
    <circle cx={20} cy={23} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
