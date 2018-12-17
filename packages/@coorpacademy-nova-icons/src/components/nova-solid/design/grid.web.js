import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M20 2H4c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zm0 7h-3v6h3v2h-3v3h-2v-3H9v3H7v-3H4v-2h3V9H4V7h3V4h2v3h6V4h2v3h3v2z" />
      <path d="M9 9h6v6H9z" />
    </g>
  </svg>
);

export default SvgComponent;
