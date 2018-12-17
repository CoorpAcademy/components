import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 3.003h18v2H4zM8 7.003h14v2H8zM2 11.003h20v2H2zM8 15.003h14v2H8zM4 19.003h18v2H4z" />
    </g>
  </svg>
);

export default SvgComponent;
