import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 8h7v2H3zM3 11h5v2H3z" />
      <path d="M2 7h15.999l-.001 1H20V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12c0 1.103.896 2 2 2h6v-2H2V7zm16-5l-.001 3H2V2h16z" />
      <path d="M17 10c-3.859 0-7 3.14-7 7 0 3.861 3.141 7 7 7s7-3.139 7-7c0-3.86-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      <path d="M16 17h2v4h-2z" />
      <circle cx={17} cy={15} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
