import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M15 2H9c-1.103 0-2 .896-2 2v12c0 1.104.897 2 2 2h2v4h2v-4h2c1.103 0 2-.896 2-2V4c0-1.104-.897-2-2-2zM9 16V4h6l.001 12H9z" />
      <circle cx={12} cy={6.5} r={1.5} />
      <circle cx={12} cy={10} r={1.5} />
      <circle cx={12} cy={13.5} r={1.5} />
    </g>
  </svg>
);

export default SvgComponent;
