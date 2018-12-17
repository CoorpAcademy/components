import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M17 19v-3h-2v3c0 1.654 1.346 3 3 3h2v-2h-2c-.551 0-1-.449-1-1zM7 19c0 .551-.449 1-1 1H4v2h2c1.654 0 3-1.346 3-3v-3H7v3zM11 16h2v6h-2zM20 4H4c-1.103 0-2 .896-2 2v9h2v-2h16v2h2V6c0-1.104-.897-2-2-2zM4 6h16v5H4V6z" />
      <path d="M6 7h12v2H6z" />
    </g>
  </svg>
);

export default SvgComponent;
