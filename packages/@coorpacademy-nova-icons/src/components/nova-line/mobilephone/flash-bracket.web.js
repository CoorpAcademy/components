import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      d="M8 19c-3.859 0-7-3.14-7-7 0-3.859 3.141-7 7-7v2c-2.757 0-5 2.243-5 5s2.243 5 5 5v2zM16 19v-2c2.757 0 5-2.243 5-5s-2.243-5-5-5V5c3.859 0 7 3.141 7 7 0 3.86-3.141 7-7 7z"
      fill="currentColor"
    />
    <path
      d="M11 21a1 1 0 0 1-1-1v-6H7a1.002 1.002 0 0 1-.832-1.554l6-9a.995.995 0 0 1 1.121-.402A.998.998 0 0 1 14 4v6h3a1.002 1.002 0 0 1 .832 1.554l-6 9A1 1 0 0 1 11 21zm-2.131-9H11a1 1 0 0 1 1 1v3.697L15.131 12H13a1 1 0 0 1-1-1V7.303L8.869 12z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
