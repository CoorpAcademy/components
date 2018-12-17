import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      d="M21 11.001h-5v-4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-17 1h4v5H4v-5zm6-4h4v9h-4v-9zm10 9h-4v-4h4v4z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
