import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 9V7h-2V6c0-1.104-.897-2-2-2h-1V2h-2v2h-2V2h-2v2H9V2H7v2H6c-1.103 0-2 .896-2 2v1H2v2h2v2H2v2h2v2H2v2h2v1c0 1.103.897 2 2 2h1v2h2v-2h2v2h2v-2h2v2h2v-2h1c1.103 0 2-.897 2-2v-1h2v-2h-2v-2h2v-2h-2V9h2zM6 18V6h12l.001 12H6z" />
      <path d="M14 8H9v2h4v1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5v-2h-4v-1h3a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
