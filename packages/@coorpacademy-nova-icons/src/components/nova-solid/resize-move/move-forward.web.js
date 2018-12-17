import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      fill="currentColor"
      d="M16.293 7.707L18.586 10H5c-1.103 0-2 .896-2 2v5h2v-5h13.586l-2.293 2.293 1.414 1.414L22.414 11l-4.707-4.707-1.414 1.414z"
    />
  </svg>
);

export default SvgComponent;
