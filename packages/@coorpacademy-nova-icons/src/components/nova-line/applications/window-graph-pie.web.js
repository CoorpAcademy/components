import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 2H3c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20V8h17.999l-.002 12H3z" />
      <path d="M9 14v-3a3.001 3.001 0 0 0 0 6 3 3 0 0 0 3-3H9z" />
      <path d="M10 10v3h3c0-1.656-1.344-3-3-3zM15 10h3v2h-3zM14 13h4v2h-4zM12 16h6v2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
