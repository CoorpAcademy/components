import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M9 22a1 1 0 0 1-1-1v-5H3a1 1 0 0 1-.707-1.707l12-12a.999.999 0 0 1 1.414 0l6 6a.999.999 0 0 1 0 1.414l-12 12A1 1 0 0 1 9 22zm-3.586-8H9a1 1 0 0 1 1 1v3.586L19.586 9 15 4.414 5.414 14z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
