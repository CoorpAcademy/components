import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 0H2C.897 0 0 .896 0 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2V2c0-1.104-.897-2-2-2zm0 16H2V4h8v12zM18 23.414l-3.707-3.707 1.414-1.414L18 20.586l4.293-4.293 1.414 1.414z" />
    </g>
  </svg>
);

export default SvgComponent;
