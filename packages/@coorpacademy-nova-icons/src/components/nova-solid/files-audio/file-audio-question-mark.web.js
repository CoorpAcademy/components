import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 16.008a5.999 5.999 0 0 1 4-5.652V4.59L13.414.004H2c-1.103 0-2 .898-2 2v18c0 1.102.897 2 2 2h14c.366 0 .705-.106 1-.278v-.527a5.993 5.993 0 0 1-3-5.191zM12 1.004l5 5h-5v-5zm.632 10.262L10 10.389v6.112a2.5 2.5 0 1 1-2-2.45V7.614l5.265 1.755-.633 1.897z" />
      <path d="M20 12.008c-2.206 0-4 1.794-4 4h2c0-1.102.897-2 2-2s2 .898 2 2c0 1.102-.897 2-2 2h-1v3h2v-1.127a4.004 4.004 0 0 0 3-3.873c0-2.205-1.794-4-4-4z" />
      <circle cx={20} cy={23.004} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
