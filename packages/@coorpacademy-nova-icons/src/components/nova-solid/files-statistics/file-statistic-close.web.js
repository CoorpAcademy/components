import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 4.586L13.414 0H2C.897 0 0 .896 0 2v18c0 1.104.897 2.001 2 2.001h12.349a5.97 5.97 0 0 1-.349-2c0-.703.127-1.374.349-2.001L3 18.003v-2h2V7h2v9.002h1V12h2v4.001h1V10h2v6h2v.688a6.012 6.012 0 0 1 3-2.338V4.586zM12 6V1l5 5h-5z" />
      <path d="M23.707 17.708l-1.414-1.413L20 18.587l-2.293-2.292-1.414 1.413 2.293 2.293-2.293 2.293 1.414 1.415L20 21.414l2.293 2.295 1.414-1.415-2.293-2.293z" />
    </g>
  </svg>
);

export default SvgComponent;
