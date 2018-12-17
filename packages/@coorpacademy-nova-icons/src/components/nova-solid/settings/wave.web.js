import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M17.927 11.999l-3.205-6.41-2.823 8.47L6.982 1.274 2.96 11.999H0v3h5.04l1.978-5.274 5.083 13.214 3.177-9.53.795 1.59H24v-3z"
    />
  </svg>
);

export default SvgComponent;
