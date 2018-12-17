import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M13 5h2v3h-2zM9 5h2v3H9z" />
    <path
      fill="currentColor"
      d="M18 9V4c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2v5H4v6.414l4 4V22h8v-2.586l4-4V9h-2zM8 4h8v5H8V4z"
    />
    <path fill="currentColor" d="M9 5h2v3H9zM13 5h2v3h-2z" />
  </svg>
);

export default SvgComponent;
