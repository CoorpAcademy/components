import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path fill="currentColor" d="M18 22H3a1 1 0 0 1-1-1V6h2v14h14v2z" />
    <path
      fill="currentColor"
      d="M21 2H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-6 10h-2v2h-2v-2H9v-2h2V8h2v2h2v2zm4 2h-2V8h-2V6h3a1 1 0 0 1 1 1v7z"
    />
  </svg>
);

export default SvgComponent;
