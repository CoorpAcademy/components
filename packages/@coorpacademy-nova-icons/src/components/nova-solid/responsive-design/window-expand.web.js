import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 14H2c-1.103 0-2 .897-2 2h12c0-1.103-.897-2-2-2zM0 22c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2v-5H0v5zM17 18h-3v2h3v2l3-3-3-3z" />
      <path d="M7.293 8.293c.63.63.184 1.707-.707 1.707H5v2h7a2 2 0 0 1 2 2v3h2v-1.586c0-.891 1.077-1.337 1.707-.708l3.586 3.586a.998.998 0 0 1 0 1.413L21 20h1c1.103 0 2-.897 2-2V5.002H4.002l3.291 3.291zM17 7h2v4h-2V7zm-4 0h2v4h-2V7zM9 7h2v4H9V7zM22 0H4C2.897 0 2 .897 2 2v2.002h22V2c0-1.103-.897-2-2-2z" />
      <path d="M4 12V9h2L3 6 0 9h2v3z" />
    </g>
  </svg>
);

export default SvgComponent;
