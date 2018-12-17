import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 8.007H7v4h1V9.998h2zM11 8.007h2v1.99h-2zM4 8.008h2v3.999H4zM4 13.007h3v3.997H4z" />
      <path d="M2 2.004h10v4h4v1.993h2V4.59L13.414.004H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h6v-2H2v-18z" />
      <path d="M17 10.004c-3.859 0-7 3.14-7 7s3.141 7 7 7c3.86 0 7-3.14 7-7 0-3.859-3.14-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      <path d="M18 13.004h-2v5h4v-2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
