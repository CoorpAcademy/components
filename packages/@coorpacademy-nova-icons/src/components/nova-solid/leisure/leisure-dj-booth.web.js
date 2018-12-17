import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M15.5 9.5C15.5 7.57 13.93 6 12 6S8.5 7.57 8.5 9.5 10.071 13 12 13s3.5-1.57 3.5-3.5z" />
      <path d="M5.001 13h2V9c0-2.757 2.243-5 5-5s5 2.243 5 5v4h2a3 3 0 0 0 0-6h-.295C17.842 4.112 15.165 2 12 2S6.159 4.112 5.295 7h-.294a3 3 0 1 0 0 6zM12 14a5.997 5.997 0 0 0-5.187 3h10.375A5.999 5.999 0 0 0 12 14zM2 21h20v3H2zM4.001 18a1 1 0 0 0-1 1v1h8v-1a1 1 0 0 0-1-1h-6zM21 19a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v1h8v-1z" />
    </g>
  </svg>
);

export default SvgComponent;
