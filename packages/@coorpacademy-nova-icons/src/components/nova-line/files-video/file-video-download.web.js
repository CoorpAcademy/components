import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6 17l7-4-7-4z" />
      <path d="M2 2h10v4h4v6.006h2v-7.42L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h10v-2H2V2zM22.293 17.293L20 19.586V14h-2v5.586l-2.293-2.293-1.414 1.414L19 23.414l4.707-4.707z" />
    </g>
  </svg>
);

export default SvgComponent;
