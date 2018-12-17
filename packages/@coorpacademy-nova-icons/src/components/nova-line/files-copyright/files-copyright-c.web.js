import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 2.008h10v3.981h6V4.594L13.414.009H2c-1.103 0-2 .896-2 2v18c0 1.102.897 2 2 2h5v-2H2V2.008zM13 14.833v2.334C13 18.729 14.346 20 16 20h2v-2h-2c-.551 0-1-.373-1-.833v-2.334c0-.459.449-.833 1-.833h2v-2h-2c-1.654 0-3 1.271-3 2.833z" />
      <path d="M16 8c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
    </g>
  </svg>
);

export default SvgComponent;
