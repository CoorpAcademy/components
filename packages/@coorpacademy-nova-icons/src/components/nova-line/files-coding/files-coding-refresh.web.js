import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 13.007h2v3.997H8zM7 8.007h3v4H7zM4 13.007h3v3.997H4zM4 8.008h2v3.999H4zM11 8.007h2v1.992h-2z" />
      <path d="M2 2.004h10v4h4L16.001 10H18V4.59L13.414.004H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h8v-2H2v-18zM18 22.004c-1.077 0-2.063-.44-2.811-1.189L17 19.004h-5v5l1.762-1.761A5.934 5.934 0 0 0 18 24.004c3.309 0 6-2.69 6-6h-2c0 2.206-1.794 4-4 4z" />
      <path d="M22.24 13.765A5.941 5.941 0 0 0 18 12.004c-3.309 0-6 2.692-6 6h2c0-2.206 1.795-4 4-4 1.078 0 2.065.44 2.812 1.188L19 17.004h5v-5l-1.76 1.761z" />
    </g>
  </svg>
);

export default SvgComponent;
