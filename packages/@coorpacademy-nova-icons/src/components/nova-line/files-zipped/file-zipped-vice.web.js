import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 22V7c0-1.654-1.346-3-3-3H9V3h1V1H6v2h1v1H2v5h10V6h2v11h-2v-3H2v5h5v1H6v2h4v-2H9v-1h5v3h-1v2h8v-2h-1zM10 7H4V6h6v1zm0 10H4v-1h6v1zm8 5h-2v-4h2v4zm0-6h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h1c.551 0 1 .449 1 1v1z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
