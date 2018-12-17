import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 5h14l.562-1.684A1 1 0 0 0 18.612 2H5.388a1 1 0 0 0-.95 1.316L5 5zM19 16.9V7H5v9.9c0 .164-.728 3.742-.761 3.903A.998.998 0 0 0 5.22 22h13.56a1.001 1.001 0 0 0 .98-1.196c-.031-.161-.76-3.739-.76-3.904zM11 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm-3 2v-1a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4 7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4-7a1 1 0 1 1-2 0v-1a1 1 0 1 1 2 0v1z" />
    </g>
  </svg>
);

export default SvgComponent;
