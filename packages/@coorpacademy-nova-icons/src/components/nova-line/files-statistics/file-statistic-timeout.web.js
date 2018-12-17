import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 8.006H5v7H4v2h4v-2H7z" />
      <path d="M2 2.003h10v4h4v1.999h2V4.59L13.414.004H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h6v-2H2V2.003z" />
      <path d="M17 10.002c-3.86 0-7 3.139-7 7 0 3.86 3.14 7 7 7s7-3.14 7-7c0-3.861-3.14-7-7-7zm0 12c-2.757 0-5-2.244-5-5 0-2.757 2.243-5 5-5s5 2.243 5 5c0 2.756-2.243 5-5 5z" />
      <path d="M18 13.002h-2v5h4v-2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
