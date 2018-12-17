import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20.001 4h-16c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-11 4A2 2 0 1 1 9 12.001 2 2 0 0 1 9 8zm-3 8c0-1.841 1.159-3 3-3s3 1.159 3 3h-6zm12 0h-4v-2h4v2zm0-3h-4v-2h4v2z"
    />
  </svg>
);

export default SvgComponent;
