import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 9.001h-2l-1 5h-1l-2-5H8l2 7H7l3 6h8v-6l-3-2zM11 4.001H6v-2l-3 3 3 3v-2h5zM21 5.001l-3-3v2h-5v2h5v2z" />
    </g>
  </svg>
);

export default SvgComponent;
