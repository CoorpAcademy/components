import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 6h18l-.001 5H22V2c0-1.103-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h9v-2H2V6zm5-2V2h3v2H7zm13 0h-8V2h8v2zM5 2v2H2V2h3zM19 19h5v5h-5zM13 19h5v5h-5z" />
      <path d="M16 13h5v5h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
