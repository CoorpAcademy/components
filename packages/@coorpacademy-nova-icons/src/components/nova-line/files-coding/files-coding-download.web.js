import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 13.007h2v3.997H8zM11 13.006h1v3.998h-1zM7 8.007h3v4H7zM4 13.007h3v3.997H4zM4 8.008h2v3.999H4zM11 12.007L13 12V8.007h-2z" />
      <path d="M2 2.004h10v4h4V12h2V4.59L13.414.004H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h10v-2H2v-18zM22.293 17.298L20 19.59v-5.586h-2v5.586l-2.293-2.292-1.414 1.413L19 23.418l4.707-4.707z" />
    </g>
  </svg>
);

export default SvgComponent;
