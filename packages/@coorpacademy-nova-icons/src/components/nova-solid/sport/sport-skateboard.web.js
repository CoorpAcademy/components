import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 1a5 5 0 0 0-5 5v12c0 2.762 2.238 5 5 5s5-2.238 5-5V6a5 5 0 0 0-5-5zm4 18h-2v-1h-4v1H8v-3h2v1h4v-1h2v3zm0-11h-2V7h-4v1H8V5h2v1h4V5h2v3z"
    />
  </svg>
);

export default SvgComponent;
