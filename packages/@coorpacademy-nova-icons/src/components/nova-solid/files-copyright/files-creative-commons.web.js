import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 8V4.586L13.414 0H2C.897 0 0 .897 0 2v18c0 1.103.897 2 2 2h2V10c0-1.101.9-2 2-2h12zm-6-7l5 5h-5V1z" />
      <path d="M6 10v14h18V10H6zm16 12H8V12h14v10z" />
      <path d="M12 21h3v-2h-3c-.551 0-1-.448-1-1v-2c0-.551.449-1 1-1h3v-2h-3c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3zM15 18c0 1.654 1.346 3 3 3h3v-2h-3c-.551 0-1-.448-1-1v-2c0-.551.449-1 1-1h3v-2h-3c-1.654 0-3 1.346-3 3v2z" />
    </g>
  </svg>
);

export default SvgComponent;
