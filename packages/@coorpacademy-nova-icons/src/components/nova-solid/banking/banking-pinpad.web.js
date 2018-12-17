import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 5.999H5V4h14v3.999zM4 12h4v2H4zM10 12h4v2h-4zM16 12h4v2h-4zM4 16h4v2H4zM10 16h4v2h-4zM16 16h4v2h-4zM4 20h4v2H4zM10 20h4v2h-4zM16 20h4v2h-4z" />
      <path d="M7 5h2v2H7zM11 5h2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
