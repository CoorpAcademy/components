import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M17 6V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10c0 2.757 2.243 5 5 5h4c2.757 0 5-2.243 5-5v-1c2.205 0 4-1.794 4-4s-1.795-4-4-4zm-9 9H6V9h2v6zm9-3V8a2 2 0 0 1 0 4z"
    />
  </svg>
);

export default SvgComponent;
