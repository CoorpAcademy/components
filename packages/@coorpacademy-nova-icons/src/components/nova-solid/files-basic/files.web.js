import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20.414 4H13v18h9c1.103 0 2-.897 2-2V7.586L20.414 4zM18 10V5l5 5h-5zM11 4H3.586L0 7.586V20c0 1.103.897 2 2 2h9V4zm-5 6H1l5-5v5z" />
    </g>
  </svg>
);

export default SvgComponent;
