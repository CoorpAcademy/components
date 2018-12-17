import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 10.008V4.594L13.414.009H2c-1.103 0-2 .896-2 2v18c0 1.102.897 2 2 2h12v-4h-2v-4h2v-1.998h-2v-4h2v3.998c0-1.1.9-2 2-2h2zM3 8.011h2v4H3v-4zm3 9.997H3v-4h3v4zm4 0H8v-4h2v4zm0-5.997H7v-4h3v4zm2-6.003v-5l5 5h-5z" />
      <path d="M21 17.009h-2a1 1 0 0 1 0-2h4v-2h-2v-1h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2a1 1 0 0 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3 0-1.655-1.346-3-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
