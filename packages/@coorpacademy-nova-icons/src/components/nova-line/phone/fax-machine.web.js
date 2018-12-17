import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 7h-4v2h-6V7H8V6c0-.737-.405-1.375-1-1.722V1H5v3H2C.897 4 0 4.896 0 6v15a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2h2v3h10v-3h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM2 21V6h4v15H2zm16 1h-6v-4h6v4zm2-3v-3H10v3H8V9h2v2h10V9h2l.002 10H20z" />
      <path d="M12 3h6v2h2V1H10v4h2z" />
      <circle cx={12} cy={14} r={1} />
      <circle cx={15} cy={14} r={1} />
      <circle cx={18} cy={14} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
