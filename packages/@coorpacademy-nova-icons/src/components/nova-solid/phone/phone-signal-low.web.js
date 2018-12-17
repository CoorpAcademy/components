import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M7.001 19a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2zM22 22h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm-3-2h2V6h-2v14zM14 22h-4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1zm-3-2h2v-7h-2v7z"
    />
  </svg>
);

export default SvgComponent;
