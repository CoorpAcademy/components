import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2a2 2 0 0 0-2-2H2C.897 0 0 .896 0 2v2h20V2zM20 6H0v8c0 1.102.897 2 2 2h12a6 6 0 0 1 6-6V6zM8 13H3v-2h5v2zm2-3H3V8h7v2zm7 0h-4V8h4v2z" />
      <path d="M20 12c-2.206 0-4 1.795-4 4h2c0-1.102.897-2 2-2s2 .898 2 2c0 1.103-.897 2-2 2h-1v3h2v-1.127A4.003 4.003 0 0 0 24 16c0-2.205-1.794-4-4-4z" />
      <circle cx={20} cy={23} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
