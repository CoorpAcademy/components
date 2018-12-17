import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M16 14V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z" />
      <path d="M20 8h-3v2h3l.001 10H10v-3H8v3c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.102-.897-2-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
