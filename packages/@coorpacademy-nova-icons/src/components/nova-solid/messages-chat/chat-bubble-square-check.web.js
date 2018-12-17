import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11.088 7h-9.09c-1.104 0-2 .897-2 2v9c0 1.103.896 2 2 2h1v4l5.334-4h6.666c1.104 0 2-.897 2-2v-6a5.995 5.995 0 0 1-5.91-5zM15.998 9.414l-3.707-3.707 1.414-1.414 2.293 2.293 4.293-4.293 1.414 1.414z" />
    </g>
  </svg>
);

export default SvgComponent;
