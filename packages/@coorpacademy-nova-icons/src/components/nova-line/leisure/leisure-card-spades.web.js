import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M17 2H5c-1.103 0-2 .896-2 2v16c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2V4a2 2 0 0 0-2-2zm0 18H5V4h12v16z" />
      <circle cx={7} cy={6} r={1} />
      <circle cx={15} cy={18} r={1} />
      <path d="M10 14.816V16h2v-1.184A2.99 2.99 0 0 0 14 12c0-1.656-3-4-3-4s-3 2.344-3 4c0 1.305.837 2.404 2 2.816z" />
    </g>
  </svg>
);

export default SvgComponent;
