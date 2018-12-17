import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 7.001v-1a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2V9a2 2 0 0 1 2-2h10z" />
      <path d="M21 9H9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zM9 19l2.828-4.537 2.022 3.244 3.173-5.088L21 19H9z" />
    </g>
  </svg>
);

export default SvgComponent;
