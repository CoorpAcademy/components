import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M13 11.263l4.588-8.26h-2.287L12 8.945 8.699 3.003H6.412L11 11.263v.74H8v2h3v1H8v2h3v4h2v-4h3v-2h-3v-1h3v-2h-3z"
    />
  </svg>
);

export default SvgComponent;
