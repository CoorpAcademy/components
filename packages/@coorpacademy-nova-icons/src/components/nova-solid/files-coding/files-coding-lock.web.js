import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 8.011h2v3.104a6.964 6.964 0 0 1 4-2.027V4.594L13.414.009H2c-1.103 0-2 .896-2 2v18c0 1.102.897 2 2 2h10v-8h.294a6.998 6.998 0 0 1 .964-1.998H12v-4zm0-7.003l5 5h-5v-5zM3 8.011h2v4H3v-4zm3 9.997H3v-4h3v4zm4 0H8v-4h2v4zm0-5.997H7v-4h3v4z" />
      <path d="M23 15.009c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .898 2 2h-4c0-1.102.897-2 2-2zm3 9h-6v-5h6v5z" />
      <circle cx={19} cy={19.001} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
