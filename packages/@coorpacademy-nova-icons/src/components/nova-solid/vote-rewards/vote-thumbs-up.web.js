import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 8H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zM22.768 7.359A1.002 1.002 0 0 0 22 7h-6V3a1 1 0 0 0-1-1h-3a1 1 0 0 0-.919.605L8 9v9.478l3.629 1.451A.999.999 0 0 0 12 20h8c.483 0 .897-.346.984-.821l2-11a1.004 1.004 0 0 0-.216-.82z" />
    </g>
  </svg>
);

export default SvgComponent;
