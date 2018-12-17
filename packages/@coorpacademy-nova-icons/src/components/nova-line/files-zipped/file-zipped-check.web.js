import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6 4h2v2H6zM4 6h2v2H4zM6 8h2v2H6zM4 10h2v2H4z" />
      <path d="M16 2c0-1.104-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h10v-2H2V2h2v2h2V2h8l.001 13H16V2zM22.293 16.293L18 20.586l-2.293-2.293-1.414 1.414L18 23.414l5.707-5.707z" />
    </g>
  </svg>
);

export default SvgComponent;
