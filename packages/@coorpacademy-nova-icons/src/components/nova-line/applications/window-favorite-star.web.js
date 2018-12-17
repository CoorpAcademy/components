import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 6h18l-.001 4.994H22V2c0-1.103-.897-2-2-2H2C.897 0 0 .897 0 2v16c0 1.103.897 2 2 2h9v-2H2V6zm5-2V2h3v2H7zm13 0h-8V2h8v2zM5 2v2H2V2h3z" />
      <path d="M24 16.281h-4.286L18 11.994l-1.715 4.287H12l3.708 3.13-1.994 4.583L18 21.16l4.285 2.834-1.993-4.583z" />
    </g>
  </svg>
);

export default SvgComponent;
