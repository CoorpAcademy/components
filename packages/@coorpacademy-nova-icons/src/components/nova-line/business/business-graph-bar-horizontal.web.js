import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M5 19v-1h13a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-7V9.999h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5V3H3v17a1 1 0 0 0 1 1h17v-2H5zm12-3H5v-2h12v2zM5 12v-2h4v2H5zm8-6v1.999H5V6h8z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
