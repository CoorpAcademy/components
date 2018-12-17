import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-2 6h-2v2h2v2h-2v2h-2v-2h2v-2h-2V8h2V6h-2V4h2v2h2v2z"
    />
  </svg>
);

export default SvgComponent;
