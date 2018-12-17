import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 9c0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9c1.126 0 2.2-.217 3.194-.596a7.001 7.001 0 0 1 5.211-5.214A8.94 8.94 0 0 0 18 9zm-6.555 2.832L8 9.535V4h2v4.465l2.555 1.703-1.11 1.664zM19.004 14.585l-4.707 4.707 1.414 1.414 2.293-2.293V24h2v-5.587l2.293 2.293 1.414-1.414z" />
    </g>
  </svg>
);

export default SvgComponent;
