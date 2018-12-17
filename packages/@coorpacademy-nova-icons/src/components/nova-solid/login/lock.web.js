import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M9 11V8c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2V8c0-2.757-2.243-5-5-5S7 5.243 7 8v3H5v11h14V11H9zm3 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
    />
  </svg>
);

export default SvgComponent;
