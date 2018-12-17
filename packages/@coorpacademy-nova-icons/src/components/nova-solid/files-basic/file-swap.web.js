import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2v2.586l-3.293-3.293-1.414 1.414L18.586 6H16v2h6V2zM8 18v-2H2v6h2v-2.586l3.293 3.292 1.414-1.413L5.414 18zM5 15h3V9c0-1.102.897-2 2-2h4V4c0-1.102-.897-2-2-2H5c-1.103 0-2 .898-2 2v9c0 1.102.897 2 2 2z" />
      <path d="M19 9h-7c-1.103 0-2 .898-2 2v9c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-9c0-1.102-.897-2-2-2zm-7 3h4v1h-4v-1zm7 7h-7v-1h7v1zm0-3h-7v-1h7v1z" />
    </g>
  </svg>
);

export default SvgComponent;
