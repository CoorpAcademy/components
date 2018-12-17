import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22.001 6h-3V3h-2v3h-3v2h3v3h2V8h3zM10.001 5c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3zm-3 1c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zM7.001 8c-2.757 0-5 2.243-5 5v3a1 1 0 0 0 1 1h1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-3c0-2.757-2.243-5-5-5zm3 7h-1a1 1 0 0 0-1 1v4h-2v-4a1 1 0 0 0-1-1h-1v-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2z" />
    </g>
  </svg>
);

export default SvgComponent;
