import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 4h2v2H2zM8 4h2v2H8zM20 13h2v2h-2zM2 13h2v2H2zM2 10h2v2H2zM2 7h2v2H2zM2 16h2v2H2zM2 19h2v2H2zM5 4h2v2H5zM5 19h2v2H5zM8 19h2v2H8zM11 19h2v2h-2zM14 19h2v2h-2zM17 19h2v2h-2zM20 19h2v2h-2zM20 16h2v2h-2zM11 4h11v8H11z" />
    </g>
  </svg>
);

export default SvgComponent;
