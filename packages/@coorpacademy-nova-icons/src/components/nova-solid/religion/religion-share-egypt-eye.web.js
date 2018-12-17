import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M20 13v4l-2 2v-3l-2 1v5h4l2-4v-6zM6 19l-2-2v-4l-2-1v6l2 4h4v-5l-2-1zM7 14h10a1.001 1.001 0 0 0 .895-1.447l-5-10c-.339-.678-1.45-.678-1.789 0l-5 10A1 1 0 0 0 7 14zm5-6c2.209 0 4 2 4 2s-1.791 2-4 2-4-2-4-2 1.791-2 4-2z" />
      <circle cx={12} cy={10} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
