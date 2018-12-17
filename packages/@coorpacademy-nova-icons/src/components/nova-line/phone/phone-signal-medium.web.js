import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M7 19a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2zM14 12a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-9zM21 22h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm-3-2h2V6h-2v14z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
