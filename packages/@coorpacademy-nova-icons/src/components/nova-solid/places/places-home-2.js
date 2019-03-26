import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <path
      fill="currentColor"
      d="M21.707 12.293L19 9.586V5h-3v1.586l-3.293-3.293a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h2v8h5v-5h4v5h5v-8h2a.999.999 0 0 0 .707-1.707z"
    />
  </svg>
);

export default SvgComponent;
