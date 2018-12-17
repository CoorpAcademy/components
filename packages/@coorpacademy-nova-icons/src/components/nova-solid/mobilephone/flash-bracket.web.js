import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 12c0-2.757 2.243-5 5-5V5c-3.859 0-7 3.141-7 7 0 3.86 3.141 7 7 7v-2c-2.757 0-5-2.243-5-5zM16 5v2c2.757 0 5 2.243 5 5s-2.243 5-5 5v2c3.859 0 7-3.14 7-7 0-3.859-3.141-7-7-7z" />
      <path d="M17 12h-4V4L7 14h4v8z" />
    </g>
  </svg>
);

export default SvgComponent;
