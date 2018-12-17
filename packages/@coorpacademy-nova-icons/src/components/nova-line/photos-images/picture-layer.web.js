import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 8.999H9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm0 10H9v-8h12v8z" />
      <path d="M3 5.999h12v1h2v-1a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2v-2H3v-8zM16.646 12.619l-2.641 4.235-1.146-1.838L11 17.999h9z" />
    </g>
  </svg>
);

export default SvgComponent;
