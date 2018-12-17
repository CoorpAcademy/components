import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <path
      fill="currentColor"
      d="M22 11V9a1 1 0 0 0-1-1h-5V3a1 1 0 0 0-1-1h-2v2h-2V2H9a1 1 0 0 0-1 1v5H3a1 1 0 0 0-1 1v2h2v2H2v2a1 1 0 0 0 1 1h5v5a1 1 0 0 0 1 1h2v-2h2v2h2a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1v-2h-2v-2h2zM8 13H6v-2h2v2zm5 5h-2v-2h2v2zm0-10h-2V6h2v2zm5 5h-2v-2h2v2z"
    />
  </svg>
);

export default SvgComponent;
