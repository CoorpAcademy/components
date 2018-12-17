import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M14 15v3H6V6h8v3h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5h-2z"
    />
    <path fill="currentColor" d="M15 11h6v2h-6z" />
  </svg>
);

export default SvgComponent;
