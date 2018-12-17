import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M3 8h2v8H3zM8 3h8v2H8zM8 19h8v2H8zM19 8h2v8h-2z" />
      <circle cx={20} cy={4} r={2} />
      <circle cx={4} cy={4} r={2} />
      <circle cx={20} cy={20} r={2} />
      <circle cx={4} cy={20} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
