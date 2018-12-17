import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8.293 6.71l1.414-1.414L5 .589.293 5.296 1.707 6.71 4 4.417v15.172l-2.293-2.293L.293 18.71 5 23.417l4.707-4.707-1.414-1.414L6 19.589V4.417zM14 .003h10v2H14zM11 4.003h13v2H11zM11 8.003h13v2H11zM14 14.003h10v2H14zM11 18.003h13v2H11zM11 22.003h13v2H11z" />
    </g>
  </svg>
);

export default SvgComponent;
