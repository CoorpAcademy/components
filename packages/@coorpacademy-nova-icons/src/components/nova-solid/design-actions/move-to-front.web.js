import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 7H1v16h16v-2H3zM5 2h2v2H5zM8 2h2v2H8zM11 2h2v2h-2zM14 2h2v2h-2zM20 2h2v2h-2zM17 2h2v2h-2zM20 11h2v2h-2z" />
      <path d="M5 11h2v2H5zM5 8h2v2H5zM5 5h2v2H5zM20 8h2v2h-2zM20 5h2v2h-2zM5 14h2v2H5zM5 17h2v2H5zM8 17h2v2H8zM11 17h2v2h-2zM14 17h2v2h-2zM17 17h2v2h-2zM20 17h2v2h-2zM20 14h2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
