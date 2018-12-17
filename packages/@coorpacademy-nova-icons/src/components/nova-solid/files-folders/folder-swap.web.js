import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2v2.586l-3.293-3.293-1.414 1.414L18.586 6H16v2h6V2zM8 18v-2H2v6h2v-2.586l3.293 3.292 1.414-1.413L5.414 18zM8 9h6V5H8L7 3H2v11h6z" />
      <path d="M15 11h-5v11h12v-9h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
