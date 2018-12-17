import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M19 2H5a1 1 0 0 0-1 1v3h2V4h5v16H8v2h8v-2h-3V4h5v2h2V3a1 1 0 0 0-1-1z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
