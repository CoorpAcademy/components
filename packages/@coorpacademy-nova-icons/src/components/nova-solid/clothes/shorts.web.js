import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24.001v24H.001z" />
    <g fill="currentColor">
      <path d="M21.006 8H2.996l-.991 10.911A1 1 0 0 0 3.001 20h7a1 1 0 0 0 1-1v-4a1.001 1.001 0 0 1 2 0v4a1 1 0 0 0 1 1h7a1.001 1.001 0 0 0 .996-1.089L21.006 8zM7.001 10c0 1.102-.898 2-2 2h-.359l.273-3h2.087v1zM19 12c-1.104 0-2-.898-2-2V9h2.088l.272 3H19zM21 5a1 1 0 0 0-1-1h-6v3h7V5zM10 4H4a1 1 0 0 0-1 1v2h7V4z" />
    </g>
  </svg>
);

export default SvgComponent;
