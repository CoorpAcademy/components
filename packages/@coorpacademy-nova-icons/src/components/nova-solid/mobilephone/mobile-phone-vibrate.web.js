import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 9.999h2v7h-2zM2 6.999h2v7H2zM18 3.999a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-16zm-2 14H8v-12h8v12z"
    />
  </svg>
);

export default SvgComponent;
