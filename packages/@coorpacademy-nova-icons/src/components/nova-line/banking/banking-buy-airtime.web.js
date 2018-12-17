import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18.5 17H22v-2h-2v-1h-2v1.051c-1.14.232-2 1.242-2 2.449 0 1.378 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H16v2h2v1h2v-1.051c1.14-.232 2-1.242 2-2.449 0-1.378-1.121-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1zM12 0H4C2.897 0 2 .896 2 2v16c0 1.103.897 2 2 2h8c1.104 0 2-.897 2-2V2a2 2 0 0 0-2-2zm0 2v2H4V2h8zm.001 4v8H4V6h8.001zM4 18v-2h8.002v2H4z" />
    </g>
  </svg>
);

export default SvgComponent;
