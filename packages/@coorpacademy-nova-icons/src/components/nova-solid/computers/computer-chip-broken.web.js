import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M22 8V6h-2a2 2 0 0 0-2-2h-4.25L13 7h2l-4 7V8H9l.8-4H6a2 2 0 0 0-2 2H2v2h2v3H2v2h2v3H2v2h2a2 2 0 0 0 2 2h1v2h2v-2h2v2h2v-2h2v2h2v-2h1a2 2 0 0 0 2-2h2v-2h-2v-3h2v-2h-2V8h2zm-4 10h-4v-2h4v2z"
    />
  </svg>
);

export default SvgComponent;
