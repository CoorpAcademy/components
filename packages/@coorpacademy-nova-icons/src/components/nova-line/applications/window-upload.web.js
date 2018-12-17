import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 0H3C1.897 0 1 .896 1 2v16c0 1.103.897 2 2 2h3v-2H3V6h17.999l-.002 12H18v2h3c1.104 0 2-.897 2-2V2a2 2 0 0 0-2-2zM11 2v2H8V2h3zM3 2h3v2H3V2zm10 2V2h8v2h-8z" />
      <path d="M7.293 19.292l1.414 1.415L11 18.414V24h2v-5.586l2.293 2.293 1.414-1.415L12 14.586z" />
    </g>
  </svg>
);

export default SvgComponent;
