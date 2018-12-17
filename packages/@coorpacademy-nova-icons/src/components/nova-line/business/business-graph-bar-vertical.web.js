import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 19V6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v6.999h-2v-3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1V19H5V3H3v17a1 1 0 0 0 1 1h17v-2h-1zM16 7h2v11.999h-2V7zm-2 7.999v4h-2v-4h2zm-6-4h2v8H8v-8z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
