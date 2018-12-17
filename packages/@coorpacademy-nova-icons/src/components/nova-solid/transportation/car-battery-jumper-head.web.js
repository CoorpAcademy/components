import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 12c-1.654 0-3 1.346-3 3v4c0 .551-.449 1-1 1h-1v2h1c1.654 0 3-1.346 3-3v-4c0-.551.449-1 1-1h1v-2h-1zM4 20a2 2 0 0 0 4 0v-4H4v4zM12.811 15h2.087a4.991 4.991 0 0 0-1.911-2.988L15 10V2h-4l2 2-2 2 2 2-3 3-3-3 2-2-2-2 2-2H5v8l2.012 2.012A4.996 4.996 0 0 0 5.101 15h2.087c.414-1.16 1.51-2 2.812-2s2.398.84 2.811 2zM12 20a2 2 0 0 0 4 0v-4h-4v4z" />
    </g>
  </svg>
);

export default SvgComponent;
