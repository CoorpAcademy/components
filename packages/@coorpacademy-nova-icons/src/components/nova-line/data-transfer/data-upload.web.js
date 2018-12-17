import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .006h24v24H0z" />
    <g fill="currentColor">
      <path d="M7.293 10.295l1.414 1.414L11 9.416v12.586h2V9.416l2.293 2.293 1.414-1.414L12 5.588z" />
      <path d="M18 2.002H6a2 2 0 0 0-2 2v10c0 1.102.896 2 2 2h1v-2H6v-10h12v10h-1v2h1c1.104 0 2-.898 2-2v-10a2 2 0 0 0-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
