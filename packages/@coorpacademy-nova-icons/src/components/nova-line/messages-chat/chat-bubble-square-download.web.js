import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14.998 11v7H7.664l-2.666 2v-2h-3V9h11V7h-11a2 2 0 0 0-2 2v9c0 1.103.896 2 2 2h1v4l5.334-4h6.666c1.104 0 2-.897 2-2v-7h-2zM22.291 3.293l-2.293 2.293V0h-2v5.586l-2.293-2.293-1.414 1.414 4.707 4.707 4.707-4.707z" />
    </g>
  </svg>
);

export default SvgComponent;
