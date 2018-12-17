import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={9.5} cy={9.5} r={1.5} />
      <path d="M17 15.976L13.275 10l-2.589 4.154-1.249-2.004-2.384 3.826z" />
      <path d="M22 5V4a2 2 0 0 0-2-2h-1v2h-2V2h-2v2h-2V2h-2v2H9V2H7v2H5V2H4a2 2 0 0 0-2 2v1h2v2H2v2h2v2H2v2h2v2H2v2h2v2H2v1a2 2 0 0 0 2 2h1v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h1a2 2 0 0 0 2-2v-1h-2v-2h2v-2h-2v-2h2v-2h-2V9h2V7h-2V5h2zm-4 13H6V6h12v12z" />
    </g>
  </svg>
);

export default SvgComponent;
