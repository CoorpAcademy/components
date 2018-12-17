import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <g fill="currentColor">
      <path d="M16.998 17.998h-10a2 2 0 0 0 0 4h10a2 2 0 1 0 0-4zM7.998 16.998h8a2 2 0 1 0 0-4h-8a2 2 0 0 0 0 4zM8.998 11.998h6a2 2 0 1 0 0-4h-6a2 2 0 0 0 0 4zM10.998 1.998h2v5h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
