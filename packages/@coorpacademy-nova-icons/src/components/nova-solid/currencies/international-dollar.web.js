import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M15 1.352V5h3.647A10.068 10.068 0 0 0 15 1.352zM13 .461a9.986 9.986 0 0 0-6 0V5h6V.461zM5 18.647V15H1.353A10.058 10.058 0 0 0 5 18.647zM11.664 7H7v4.663A10.02 10.02 0 0 1 11.664 7zM1.353 5H5V1.352A10.068 10.068 0 0 0 1.353 5zM0 10a9.98 9.98 0 0 0 .461 3H5V7H.461A9.986 9.986 0 0 0 0 10zM16 8c-4.411 0-8 3.589-8 8 0 4.412 3.589 8 8 8s8-3.588 8-8c0-4.411-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
      <path d="M17 11h-2v1.051c-1.14.232-2 1.242-2 2.449 0 1.378 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H13v2h2v1h2v-1.051c1.14-.232 2-1.243 2-2.449 0-1.378-1.122-2.5-2.5-2.5h-1a.5.5 0 1 1 0-1H19v-2h-2v-1z" />
    </g>
  </svg>
);

export default SvgComponent;
