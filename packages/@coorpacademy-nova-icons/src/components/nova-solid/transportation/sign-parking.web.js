import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <path
      fill="currentColor"
      d="M13 4H8a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h2c3.309 0 6-2.691 6-6s-2.691-6-6-6zm0 8h-2V8h2c1.104 0 2 .898 2 2 0 1.102-.896 2-2 2z"
    />
  </svg>
);

export default SvgComponent;
