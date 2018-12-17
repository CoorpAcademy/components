import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zM8 16a3 3 0 1 1 0-6v3h3a3 3 0 0 1-3 3zm1-4V9c1.656 0 3 1.344 3 3H9zm10 5h-6v-2h6v2zm0-3h-4v-2h4v2zm0-3h-3V9h3v2zm1-5H4V5h16v1z"
    />
  </svg>
);

export default SvgComponent;
