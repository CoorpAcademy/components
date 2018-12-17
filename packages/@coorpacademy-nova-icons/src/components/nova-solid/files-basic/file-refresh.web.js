import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 10V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h9.079A7.952 7.952 0 0 1 10 18a8 8 0 0 1 8-8zm-6-9l5 5h-5V1zM3 9h9v2H3V9zm6 6H3v-2h6v2z" />
      <path d="M18.001 22c-1.077 0-2.064-.44-2.811-1.19L17.001 19h-5v5l1.764-1.764A6.026 6.026 0 0 0 18.001 24c3.309 0 6-2.691 6-6h-2c0 2.206-1.794 4-4 4zM22.24 13.761A5.937 5.937 0 0 0 18.001 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4 1.078 0 2.065.44 2.812 1.189L19.001 17h5v-5l-1.761 1.761z" />
    </g>
  </svg>
);

export default SvgComponent;
