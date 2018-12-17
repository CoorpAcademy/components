import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 3.586v2.828L19.586 12 14 17.586v2.828L22.414 12zM10 17.586L4.414 12 10 6.414V3.586L1.586 12 10 20.414z" />
    </g>
  </svg>
);

export default SvgComponent;
