import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14.998 12v6H7.664l-2.666 2v-2h-3V9h11V7h-11c-1.103 0-2 .896-2 2v9c0 1.103.897 2 2 2h1v4l5.334-4h6.666c1.104 0 2-.897 2-2v-6h-2zM23.705 5.292L18.998.585l-4.707 4.707 1.414 1.414 2.293-2.293V10h2V4.413l2.293 2.293z" />
    </g>
  </svg>
);

export default SvgComponent;
