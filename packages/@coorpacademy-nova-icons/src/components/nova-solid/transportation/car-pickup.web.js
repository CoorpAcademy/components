import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24V24H0z" />
    <g fill="currentColor">
      <circle cx={18} cy={19} r={2} />
      <circle cx={6} cy={19} r={2} />
      <path d="M23 12h-9V8a1 1 0 0 0-1-1H8.354a2 2 0 0 0-1.857 1.257L5 12H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h2.184c.413-1.162 1.512-2 2.816-2s2.403.838 2.816 2h6.367c.414-1.162 1.513-2 2.816-2s2.403.838 2.816 2H22a2 2 0 0 0 2-2v-3a1 1 0 0 0-1-1zm-11 0H7l1-3h4v3z" />
    </g>
  </svg>
);

export default SvgComponent;
