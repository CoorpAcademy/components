import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 15.423V4.586L13.414 0H2C.897 0 0 .897 0 2v18c0 1.103.897 2 2 2h13.421A4.973 4.973 0 0 1 15 20.001a4.995 4.995 0 0 1 3-4.578zM3 8.003h2v4H3v-4zM6 18H3v-4h3v4zm4 0H8v-4h2v4zm0-5.997H7v-4h3v4zM14 18h-2v-4h2v4zm0-5.997h-2v-4h2v4zM12 6V1l5 5h-5zM17 19.001h6v2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
