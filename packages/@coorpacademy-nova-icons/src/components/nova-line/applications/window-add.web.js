import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 6h18l-.002 7.994H22V2c0-1.103-.896-2-2-2H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h12v-2H2V6zm5-2V2h3v2H7zm13 0h-8V2h8v2zM5 2v2H2V2h3z" />
      <path d="M24 18.994h-3v-3h-2v3h-3v2h3v3h2v-3h3z" />
    </g>
  </svg>
);

export default SvgComponent;
