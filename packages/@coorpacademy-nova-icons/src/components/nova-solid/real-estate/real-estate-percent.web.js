import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <path
      fill="currentColor"
      d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h1v9h16v-9h1a.999.999 0 0 0 .707-1.707zM9 15a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm1 5l2-9h2l-2 9h-2zm5-2a1 1 0 1 1 0-2 1 1 0 1 1 0 2z"
    />
  </svg>
);

export default SvgComponent;
