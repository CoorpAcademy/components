import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M11 8C4.648 8 0 15 0 15s4.648 7 11 7 11-7 11-7-4.648-7-11-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
      <circle cx={11} cy={15} r={2} />
      <path d="M16 4h6v2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
