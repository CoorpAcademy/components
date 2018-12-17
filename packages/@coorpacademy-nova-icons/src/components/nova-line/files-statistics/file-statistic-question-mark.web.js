import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 10.006h-2v5h-1v-3H8v3H7v-7H5v7H4v2h10v-2h-1z" />
      <path d="M2 2.002h10v4h4v3.993h2V4.588L13.414.003H2c-1.103 0-2 .897-2 2v18.001c0 1.103.897 2 2 2h12v-2H2V2.002z" />
      <path d="M20 12.002c-2.206 0-4 1.794-4 4h2c0-1.104.897-2 2-2s2 .896 2 2c0 1.102-.897 2-2 2h-1v3h2v-1.126a4.01 4.01 0 0 0 3-3.874c0-2.206-1.794-4-4-4z" />
      <circle cx={20} cy={23.002} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
