import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 11v4c1.103 0 2-.897 2-2 0-1.102-.897-2-2-2zM19 11h-1v2h1a1.001 1.001 0 0 0 0-2z" />
      <path d="M22 5.001H2c-1.1 0-2 .901-2 2v12c0 1.099.9 2 2 2h20c1.1 0 2-.901 2-2v-12c0-1.1-.9-2-2-2zM8 17H6v-3H4v3H2V9h2v3h2V9h2v8zm3 0H9V9h2c2.206 0 4 1.794 4 4 0 2.207-1.794 4-4 4zm11 0h-2.315l-1.168-2H18v2h-2V9h3c1.654 0 3 1.345 3 3a2.992 2.992 0 0 1-1.432 2.546L22 17z" />
    </g>
  </svg>
);

export default SvgComponent;
