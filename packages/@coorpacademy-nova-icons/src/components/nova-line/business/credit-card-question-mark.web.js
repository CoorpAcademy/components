import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 8h4v2h-4zM3 8h7v2H3zM3 11h5v2H3z" />
      <path d="M2 7h15.999l-.001 3H20V2c0-1.102-.896-2-2-2H2C.897 0 0 .898 0 2v12c0 1.103.897 2 2 2h12v-2H2V7zm16-5l-.001 3H2V2h16z" />
      <path d="M20 12c-2.205 0-4 1.794-4 4h2c0-1.102.897-2 2-2 1.104 0 2 .898 2 2 0 1.103-.896 2-2 2h-1v3h2v-1.126A4.007 4.007 0 0 0 24 16c0-2.206-1.794-4-4-4z" />
      <circle cx={20} cy={23} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
