import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 2h2v2H5zM8 2h2v2H8zM11 2h2v2h-2zM2 2h2v2H2zM2 5h2v2H2zM2 8h2v2H2zM2 11h2v2H2zM2 14h2v2H2zM5 14h2v2H5zM8 14h2v2H8zM11 14h2v2h-2zM14 14h2v2h-2zM14 11h2v2h-2zM14 8h2v2h-2zM14 2h2v2h-2zM14 5h2v2h-2z" />
      <path d="M18 7v11H7v4h15V7z" />
    </g>
  </svg>
);

export default SvgComponent;
