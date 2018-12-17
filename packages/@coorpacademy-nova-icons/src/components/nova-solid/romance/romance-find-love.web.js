import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M14.291 15.706l1.414-1.414 6.001 5.999-1.414 1.414zM8.999 1.998A7 7 0 1 0 9 15.999 7 7 0 0 0 9 1.998zm0 10s-3-3-3-4.5a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1 3 0c0 1.5-3 4.5-3 4.5z" />
    </g>
  </svg>
);

export default SvgComponent;
