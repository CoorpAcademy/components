import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 18.003v-2h2V7h2v9.002h1V12h2v4.001h1V10h2v6h1.538A5.985 5.985 0 0 1 18 14.091V4.586L13.414 0H2C.897 0 0 .896 0 2v18c0 1.104.897 2.001 2 2.001h11.349a5.97 5.97 0 0 1-.349-2c0-.703.127-1.374.349-2L3 18.003zM12 1l5 5h-5V1z" />
      <path d="M22.293 16.295L18 20.587l-2.293-2.292-1.414 1.413L18 23.414l5.707-5.706z" />
    </g>
  </svg>
);

export default SvgComponent;
