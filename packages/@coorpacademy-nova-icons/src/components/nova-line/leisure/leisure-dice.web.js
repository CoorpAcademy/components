import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <circle cx={12} cy={6} r={1} />
      <circle cx={18} cy={6} r={1} />
      <circle cx={18} cy={12} r={1} />
      <path d="M20 2H10c-1.103 0-2 .896-2 2v3h2V4h10v10h-3v2h3c1.104 0 2-.897 2-2V4a2 2 0 0 0-2-2z" />
      <path d="M14 8H4a2 2 0 0 0-2 2v10c0 1.103.896 2 2 2h10c1.104 0 2-.897 2-2V10a2 2 0 0 0-2-2zm0 12H4V10h10v10z" />
      <circle cx={7} cy={12} r={1} />
      <circle cx={11} cy={12} r={1} />
      <circle cx={7} cy={15} r={1} />
      <circle cx={11} cy={15} r={1} />
      <circle cx={7} cy={18} r={1} />
      <circle cx={11} cy={18} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
