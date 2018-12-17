import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 19a1 1 0 0 0 1-1v-4h2a1 1 0 0 0 1-1h4v-2h-4a1 1 0 0 0-1-1h-4a2 2 0 0 0 2-2V7H9v1a2 2 0 0 0 2 2H7a1 1 0 0 0-1 1H2v2h4a1 1 0 0 0 1 1h2v4a1 1 0 0 0 1 1h1v2.5L10 23h4l-1-1.5V19h1zM12 2L6 6h12zM2 23h4l-2-3z" />
      <path d="M6 23h4l-2-3zM16 20l-2 3h4zM20 20l-2 3h4z" />
    </g>
  </svg>
);

export default SvgComponent;
