import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9.999 18H8v-4h2v3.982a7.974 7.974 0 0 1 2.718-5.979H12v-4h2v3.077a7.951 7.951 0 0 1 3.999-1.079V4.586L13.414 0H2C.897 0 0 .897 0 2v18c0 1.103.897 2 2 2h9.078a7.95 7.95 0 0 1-1.079-4zM12 1l5 5h-5V1zM3 8.003h2v4H3v-4zM6 18H3v-4h3v4zm1-9.997h3v4H7v-4z" />
      <path d="M18 22.001c-1.077 0-2.064-.441-2.811-1.189L17 19.001h-5v5l1.764-1.764A6.032 6.032 0 0 0 18 24.001c3.309 0 6-2.691 6-6h-2c0 2.205-1.794 4-4 4zM22.239 13.762A5.937 5.937 0 0 0 18 12.001c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4 1.078 0 2.065.441 2.812 1.189L19 17.001h5v-5l-1.761 1.761z" />
    </g>
  </svg>
);

export default SvgComponent;
