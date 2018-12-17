import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 8c.338 0 .671.023 1 .059V4.586L13.414 0H2C.897 0 0 .897 0 2v18c0 1.103.897 2 2 2h7.518A9 9 0 0 1 17 8zm-5-7l5 5h-5V1z" />
      <path d="M17 10a7 7 0 0 0-7 7c0 3.867 3.134 7 7 7s7-3.133 7-7a7 7 0 0 0-7-7zm2 5h-3c-.551 0-1 .449-1 1v2c0 .552.449 1 1 1h3v2h-3c-1.654 0-3-1.346-3-3v-2c0-1.654 1.346-3 3-3h3v2z" />
    </g>
  </svg>
);

export default SvgComponent;
