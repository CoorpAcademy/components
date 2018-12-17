import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M15 9V2H2v13h7v7h13V9h-7zM4 13V4h9l.001 5H9v4H4zm16.001 7H11v-5h4v-4h5l.001 9z"
    />
  </svg>
);

export default SvgComponent;
