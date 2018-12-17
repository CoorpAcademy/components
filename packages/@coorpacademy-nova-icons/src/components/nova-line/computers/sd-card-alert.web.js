import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M14 20H2c-1.103 0-2-.897-2-2V2C0 .896.897 0 2 0h7.531c.596 0 1.156.262 1.537.72l4.468 5.362A2 2 0 0 1 16 7.362v10.635C16 19.551 15.551 20 14 20zM9.532 2H2v16h12V7.362L9.532 2z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M3 4h2v3H3zM6 4h2v3H6z" />
    <g>
      <path fill="currentColor" d="M19 15h2v6h-2z" />
      <circle cx={20} cy={23} r={1} fill="currentColor" />
    </g>
  </svg>
);

export default SvgComponent;
