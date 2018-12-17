import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 6.006h18v1.993h2V2.006c0-1.104-.897-2-2-2H2c-1.103 0-2 .896-2 2v16c0 1.102.897 2 2 2h6v-2H2v-12zm5-2v-2h3v2H7zm13 0h-8v-2h8v2zm-15-2v2H2v-2h3z" />
      <path d="M17 10c-3.86 0-7 3.14-7 7 0 3.861 3.14 7 7 7s7-3.139 7-7c0-3.86-3.14-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      <path d="M16 17h2v4h-2z" />
      <circle cx={17} cy={15} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
