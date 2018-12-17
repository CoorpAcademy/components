import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 2H3c-1.103 0-2 .896-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20V8h17.999l-.002 12H3z" />
      <path d="M10.293 14.292l-2 2L7 15v4h4l-1.293-1.293 2-2zM11 9H7v4l1.293-1.293 2 2 1.414-1.415-2-2zM13.707 14.292l-1.414 1.415 2 2L13 19h4v-4l-1.293 1.292zM14.293 10.292l-2 2 1.414 1.415 2-2L17 13V9h-4z" />
    </g>
  </svg>
);

export default SvgComponent;
