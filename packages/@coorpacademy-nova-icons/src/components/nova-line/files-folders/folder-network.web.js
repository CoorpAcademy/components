import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={19} cy={21} r={1} />
      <circle cx={5} cy={21} r={1} />
      <path d="M20 5h-8.25L10.1 2.8A2.009 2.009 0 0 0 8.5 2H4c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h7v3H8v2h8v-2h-3v-3h7c1.103 0 2-.897 2-2V7c0-1.102-.897-2-2-2zM4 15V4h4.5l1.65 2.2c.375.501.974.8 1.6.8H20l.001 8H4z" />
    </g>
  </svg>
);

export default SvgComponent;
