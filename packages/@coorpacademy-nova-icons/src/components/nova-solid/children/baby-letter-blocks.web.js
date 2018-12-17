import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <g fill="currentColor">
      <path d="M15.998 1.998h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-3.5 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM9.998 12.998h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-2 6h-3v-3h3v3zM20.998 12.998h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-6 7l2.5-5 2.5 5h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
