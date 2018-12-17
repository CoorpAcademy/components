import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 11.003h-4.586l1.293-1.293-1.414-1.414-3.707 3.707 3.707 3.707 1.414-1.414-1.293-1.293H22zM11 2.003h2v20h-2zM2 3.003h8v2H2zM4 7.003h6v2H4zM2 11.003h8v2H2zM4 15.003h6v2H4zM2 19.003h8v2H2z" />
    </g>
  </svg>
);

export default SvgComponent;
