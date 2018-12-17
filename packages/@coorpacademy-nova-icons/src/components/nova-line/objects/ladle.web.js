import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M17 2c-1.654 0-3 1.346-3 3v9H7a1 1 0 0 0-1 1v2c0 2.757 2.243 5 5 5s5-2.243 5-5V5c0-.552.449-1 1-1h2V2h-2zm-3 15c0 1.654-1.346 3-3 3s-3-1.346-3-3v-1h6v1z" />
      <path d="M8 9c0 .552-.449 1-1 1v2c1.654 0 3-1.346 3-3S8.654 6 7 6a1.001 1.001 0 0 1 0-2V2C5.346 2 4 3.346 4 5s1.346 3 3 3c.551 0 1 .448 1 1z" />
    </g>
  </svg>
);

export default SvgComponent;
