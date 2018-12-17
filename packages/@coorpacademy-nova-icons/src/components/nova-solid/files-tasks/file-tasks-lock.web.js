import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 4h-2a2 2 0 0 0-4 0H8v3h8V4zM12 12c-.551 0-1 .449-1 1v2h2v-2c0-.551-.449-1-1-1z" />
      <path d="M19 5h-1v3H6V5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-3 15H8v-5h1v-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h1v5z" />
    </g>
  </svg>
);

export default SvgComponent;
