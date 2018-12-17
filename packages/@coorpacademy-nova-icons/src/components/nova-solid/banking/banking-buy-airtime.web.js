import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22-.001h-8c-1.102 0-2 .897-2 2v10h2V2h8v14h-6v4h6c1.104 0 2-.897 2-2V2a2.002 2.002 0 0 0-2-2.001zM8 5.999v2H5c-.552 0-1 .449-1 1v3h2v-2h2v2l3-3-3-3zM0 15v8a1 1 0 0 0 1 1h2v-2H2v-6h1v-2H1a1 1 0 0 0-1 1z" />
      <path d="M13 14h-2v2h1v6h-1v2h2a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zM8 14H6v1.051c-1.14.232-2 1.242-2 2.449C4 18.878 5.122 20 6.5 20h1a.5.5 0 0 1 0 1H4v2h2v1h2v-1.05c1.14-.232 2-1.242 2-2.45 0-1.378-1.121-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H10v-2H8v-1z" />
    </g>
  </svg>
);

export default SvgComponent;
