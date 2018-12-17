import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24V24H0z" />
    <g fill="currentColor">
      <circle cx={17} cy={19} r={2} />
      <path d="M19 6H7a2 2 0 0 0-2 2v7H1v4h2v-2h2v2h9a3 3 0 0 1 3-3 2.992 2.992 0 0 1 2.974 2.736A1.989 1.989 0 0 0 21 17V8a2 2 0 0 0-2-2zm-7 10H7V9h5v7zm7-3h-5V9h5v4z" />
    </g>
  </svg>
);

export default SvgComponent;
