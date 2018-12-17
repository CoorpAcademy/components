import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M19 10a1 1 0 0 0 1-1V6a1 1 0 0 0-.605-.919l-7-3a1.001 1.001 0 0 0-.789 0l-7 3A.999.999 0 0 0 4 6v3a1 1 0 0 0 1 1h1v10H4v2h16v-2h-2V10h1zM9 10h6v2H9v-2z"
    />
  </svg>
);

export default SvgComponent;
