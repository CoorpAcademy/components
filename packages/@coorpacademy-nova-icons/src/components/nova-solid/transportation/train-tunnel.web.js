import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 22h2l-3-6H5l-3 6h2l.5-1h15l.5 1zM5.5 19l.5-1h12l.5 1h-13zM19 9A7 7 0 1 0 5 9v6h14V9zM9 12.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM8 9a4 4 0 0 1 8 0H8z" />
    </g>
  </svg>
);

export default SvgComponent;
