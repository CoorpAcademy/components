import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zm-4 10h-3v-3h-2v1h1v2h-4v-2h1v-1H9v3H6v-2h1v-2a1 1 0 0 1 1-1h3v-1h-1V9h4v2h-1v1h3a1 1 0 0 1 1 1v2h1v2zm2-11H4V5h16v1z"
    />
  </svg>
);

export default SvgComponent;
