import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 8H4c-1.103 0-2 .897-2 2v4c0 1.102.897 2 2 2h16c1.103 0 2-.898 2-2v-4c0-1.103-.897-2-2-2zm0 6h-2v-4h2v4z"
    />
  </svg>
);

export default SvgComponent;
