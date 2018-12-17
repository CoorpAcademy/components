import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 3.003h20v2H2zM2 7.003h20v2H2zM2 11.003h20v2H2zM2 15.003h20v2H2zM2 19.003h14v2H2z" />
    </g>
  </svg>
);

export default SvgComponent;
