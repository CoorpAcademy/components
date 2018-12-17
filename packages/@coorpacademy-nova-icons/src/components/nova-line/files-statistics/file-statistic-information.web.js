import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M8 15.006H7v-7H5v7H4v2h5v-5H8z" />
    <path
      d="M2 2.002h10v4h4v2.001h2V4.588L13.414.003H2c-1.103 0-2 .897-2 2v18.001c0 1.103.897 2 2 2h7v-2H2V2.002z"
      fill="currentColor"
    />
    <path
      d="M17 10.002c-3.859 0-7 3.139-7 7 0 3.86 3.141 7 7 7s7-3.14 7-7c0-3.861-3.141-7-7-7zm0 12c-2.757 0-5-2.244-5-5 0-2.757 2.243-5 5-5s5 2.243 5 5c0 2.756-2.243 5-5 5z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M16 17.002h2v4h-2z" />
    <circle cx={17} cy={15.002} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
