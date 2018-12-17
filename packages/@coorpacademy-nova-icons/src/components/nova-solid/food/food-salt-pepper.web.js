import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.002-.001h24.001V24H-.002z" />
    <g fill="currentColor">
      <path d="M18 12h-2c-1.654 0-3 1.346-3 3v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6c0-1.654-1.346-3-3-3zM14.5 8h5a1.5 1.5 0 1 0 0-3H18V4h1V2h-4v2h1v1h-1.5a1.5 1.5 0 0 0 0 3zM6.5 12C3.851 12 2 13.644 2 16v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-5c0-2.356-1.851-4-4.5-4zm-1.75 3.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm3.5 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM15 9h4v2h-4z" />
    </g>
  </svg>
);

export default SvgComponent;
