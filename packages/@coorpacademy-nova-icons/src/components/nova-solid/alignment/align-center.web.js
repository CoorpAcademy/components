import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 3.003h18v2H3zM5 7.003h14v2H5zM2 11.003h20v2H2zM5 15.003h14v2H5zM3 19.003h18v2H3z" />
    </g>
  </svg>
);

export default SvgComponent;
