import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      d="M16.293 9.707L18.586 12H5V7H3v5a2 2 0 0 0 2 2h13.586l-2.293 2.293 1.414 1.414L22.414 13l-4.707-4.707-1.414 1.414z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
