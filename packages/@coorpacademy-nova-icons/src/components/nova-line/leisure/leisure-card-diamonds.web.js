import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24.002H0z" />
    <g fill="currentColor">
      <path d="M18 2H6c-1.103 0-2 .896-2 2v16c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2V4a2 2 0 0 0-2-2zm0 18H6V4h12v16z" />
      <circle cx={8} cy={6} r={1} />
      <circle cx={16} cy={18} r={1} />
      <path d="M12 16l3-4-3-4-3 4z" />
    </g>
  </svg>
);

export default SvgComponent;
