import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 9h8v2H4zM4 13h6v2H4z" />
      <path d="M2 2h10v4h4v4h2V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h12v-2H2V2z" />
      <path d="M20 12c-2.206 0-4 1.794-4 4h2c0-1.104.897-2 2-2s2 .896 2 2c0 1.103-.897 2-2 2h-1v3h2v-1.126A4.01 4.01 0 0 0 24 16c0-2.206-1.794-4-4-4z" />
      <circle cx={20} cy={23} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
