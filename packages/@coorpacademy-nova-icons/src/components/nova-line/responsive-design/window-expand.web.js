import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 14H2c-1.103 0-2 .898-2 2v6c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-6c0-1.102-.897-2-2-2zm0 2v1H2v-1h8zm-8 6v-3h7.999l-.001 3H2z" />
      <path d="M22 0H4C2.897 0 2 .898 2 2v10.001h2V6h18v11h-8v2h8c1.103 0 2-.896 2-2V2c0-1.102-.897-2-2-2zM4 4V2h18v2H4z" />
      <path d="M7 8v4l1.293-1.293 2 2 1.414-1.414-2-2L11 8zM15.707 12.707l2-2L19 12V8h-4l1.293 1.293-2 2z" />
    </g>
  </svg>
);

export default SvgComponent;
