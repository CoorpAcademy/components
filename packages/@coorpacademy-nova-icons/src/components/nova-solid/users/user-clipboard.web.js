import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19.001 4h-1v3h-12V4h-1a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-7 6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-3.75 10c0-2.301 1.449-3.75 3.75-3.75s3.75 1.449 3.75 3.75h-7.5z" />
      <path d="M14.001 3a2 2 0 0 0-4 0h-2v3h8V3h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
