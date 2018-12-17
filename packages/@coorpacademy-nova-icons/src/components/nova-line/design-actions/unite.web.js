import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 9h-5V4c0-1.102-.897-2-2-2H4c-1.103 0-2 .898-2 2v9c0 1.103.897 2 2 2h5v5c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2v-9c0-1.102-.897-2-2-2zM4 13V4h9l.001 5H11c-1.103 0-2 .898-2 2v2H4zm9.001 0H11v-2h2.001v2zM11 20v-5h2c1.103 0 2-.897 2-2v-2h5l.001 9H11z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
