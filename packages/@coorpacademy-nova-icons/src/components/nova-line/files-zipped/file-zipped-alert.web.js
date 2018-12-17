import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 0H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.104-.897-2-2-2zM2 18V2h2v2h2V2h8l.001 16H2z" />
      <path d="M6 4h2v2H6zM4 6h2v2H4zM6 8h2v2H6zM4 10h2v2H4zM20 14h2v6h-2z" />
      <circle cx={21} cy={22} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
