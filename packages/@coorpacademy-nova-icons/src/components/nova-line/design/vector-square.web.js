import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M21 8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1H8V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v8H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1V8h1zm-3-4h2v2h-2V4zM4 4h2v2H4V4zm2 16H4v-2h2v2zm14 0h-2v-2h2v2zm-2-4h-1a1 1 0 0 0-1 1v1H8v-1a1 1 0 0 0-1-1H6V8h1a1 1 0 0 0 1-1V6h8v1a1 1 0 0 0 1 1h1v8z"
      fill="#767676"
    />
  </svg>
);

export default SvgComponent;
