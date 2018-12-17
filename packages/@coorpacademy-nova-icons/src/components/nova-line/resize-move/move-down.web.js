import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .004h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 1.999v8.586L8.707 8.292 7.293 9.706 12 14.413l4.707-4.707-1.414-1.414L13 10.585V1.999zM3 17.999v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5c-1.104 0-2 .897-2 2zm2 0h14l-.003 2H5v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
