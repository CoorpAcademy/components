import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M20 13v4l-2 2v-3l-2 1v5h4l2-4v-6zM6 19l-2-2v-4l-2-1v6l2 4h4v-5l-2-1zM18 10V6h-4V2h-4v4H6v4h4v8h4v-8z" />
    </g>
  </svg>
);

export default SvgComponent;
