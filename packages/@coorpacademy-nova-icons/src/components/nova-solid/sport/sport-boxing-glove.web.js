import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      fill="currentColor"
      d="M16 2h-4a4 4 0 0 0-4 4v6H6V7H5a2 2 0 0 0-2 2v3c0 3 2 5 4 5v3a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-3.555c1.19-.693 2-1.968 2-3.445V6a4 4 0 0 0-4-4zm0 18H9v-3h7v3z"
    />
  </svg>
);

export default SvgComponent;
