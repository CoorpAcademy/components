import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3.708 21.707l-1.413-1.413 5.999-6 1.413 1.413zM13 2a1 1 0 0 0-.848.471l-5 8a.997.997 0 0 0 .141 1.236l5 5a.998.998 0 0 0 1.236.141l8-5A1 1 0 0 0 22 11c0-2.523-6.477-9-9-9zm.293 12.707l-4-4 1.414-1.413 4 4-1.414 1.413z" />
    </g>
  </svg>
);

export default SvgComponent;
