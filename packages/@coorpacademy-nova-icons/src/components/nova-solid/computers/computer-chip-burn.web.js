import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 17.001a7 7 0 0 1-7-7 6.99 6.99 0 0 1 3.408-6H13v-2h-2v2H9v-2H7v2H6a2 2 0 0 0-2 2H2v2h2v3H2v2h2v3H2v2h2a2 2 0 0 0 2 2h1v2h2v-2h2v2h2v-2h2v2h2v-2h1a2 2 0 0 0 2-2v-1.294a6.99 6.99 0 0 1-2 .294z" />
      <path d="M18 .001c1.667 6.666-2 8.75-2 8.75V5.368c-1.707.742-3 2.535-3 4.633 0 2.762 2.238 5 5 5s5-2.238 5-5c0-2.576 0-5-5-10z" />
    </g>
  </svg>
);

export default SvgComponent;
