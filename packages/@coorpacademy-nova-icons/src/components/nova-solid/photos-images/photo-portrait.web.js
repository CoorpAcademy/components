import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M17 2.002H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2zm-5 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 8.002zm-3 8a3 3 0 1 1 6 0H9z"
    />
  </svg>
);

export default SvgComponent;
