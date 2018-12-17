import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 4h2v4h-2zM1 4h2v4H1zM20 5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3l-2 4h20l-2-4V5zM6 8V5h5v3H6zm7 0V5h5v3h-5zM2 21a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3h2l1 2h4l1-2h2v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-8H2v8zm16.5-7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 18.5 14zM8 15h8v1H8v-1zm-2.5-1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
    </g>
  </svg>
);

export default SvgComponent;
