import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 3.003h15v2H2zM2 7.003h8v2H2zM2 11.003h8v2H2zM2 15.003h8v2H2zM2 19.003h15v2H2zM22 12.003l-6-6v2h-4v8h4v2z" />
    </g>
  </svg>
);

export default SvgComponent;
