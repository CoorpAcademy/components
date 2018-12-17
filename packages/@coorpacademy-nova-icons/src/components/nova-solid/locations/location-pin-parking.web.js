import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M8 10h3v1H8zM10 7L9 9h6l-1-2zM13 10h3v1h-3z" />
      <path d="M12 2c-4.418 0-8 3.582-8 8s8 12 8 12 8-7.582 8-12-3.582-8-8-8zm5 10h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7v-2l2-4h5.999L17 10v2z" />
    </g>
  </svg>
);

export default SvgComponent;
