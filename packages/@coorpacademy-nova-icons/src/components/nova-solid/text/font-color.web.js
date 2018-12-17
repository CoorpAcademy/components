import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 18v5h18v-5H3zm14 4l-2-3h4l-2 3zM10 15H8.456l1.154-3h4.78l1.154 3H14v2h5v-2h-1.313L12.934 2.641a1.001 1.001 0 0 0-1.868 0L6.313 15H5v2h5v-2zm2-9.214L13.621 10H10.38L12 5.786z" />
    </g>
  </svg>
);

export default SvgComponent;
