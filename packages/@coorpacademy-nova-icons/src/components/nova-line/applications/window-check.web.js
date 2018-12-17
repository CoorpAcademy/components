import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 6h17.999l-.001 9H22V2c0-1.103-.897-2-2-2H2C.897 0 0 .897 0 2v16c0 1.103.897 2 2 2h11v-2H2V6zm5-2V2h3v2H7zm13 0h-8V2h8v2zM5 2v2H2V2h3z" />
      <path d="M22.293 16.287L18 20.58l-2.293-2.293-1.414 1.414L18 23.409l5.707-5.708z" />
    </g>
  </svg>
);

export default SvgComponent;
