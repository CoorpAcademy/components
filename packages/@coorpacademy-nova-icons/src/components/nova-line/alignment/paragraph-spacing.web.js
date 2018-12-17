import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8.293 6.708l1.414-1.414L5 .586.293 5.294l1.414 1.414L4 4.415v15.171l-2.293-2.292-1.414 1.414L5 23.415l4.707-4.707-1.414-1.414L6 19.586V4.415zM14 0h10v2H14zM11 4h13v2H11zM11 8h13v2H11zM14 14h10v2H14zM11 18h13v2H11zM11 22h13v2H11z" />
    </g>
  </svg>
);

export default SvgComponent;
