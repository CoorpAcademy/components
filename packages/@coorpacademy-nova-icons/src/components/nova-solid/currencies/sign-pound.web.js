import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M18 9.003v-2c0-2.205-1.794-4-4-4h-2c-2.206 0-4 1.795-4 4v5H6v2h2v5H6v2h12v-2h-8v-5h4v-2h-4v-5c0-1.102.897-2 2-2h2c1.103 0 2 .898 2 2v2h2z"
    />
  </svg>
);

export default SvgComponent;
