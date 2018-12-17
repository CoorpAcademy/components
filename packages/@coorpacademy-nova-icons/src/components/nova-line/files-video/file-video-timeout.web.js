import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 2h10v4h4v2.006h2v-3.42L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h6v-2H2V2z" />
      <path d="M6 17l2-1.142v-5.714L6 9zM17 10c-3.86 0-7 3.14-7 7 0 3.861 3.14 7 7 7s7-3.139 7-7c0-3.86-3.14-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      <path d="M18 13h-2v5h4v-2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
