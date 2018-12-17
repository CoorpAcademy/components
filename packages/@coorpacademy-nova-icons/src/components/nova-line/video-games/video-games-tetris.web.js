import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24.002H0z" />
    <g fill="currentColor">
      <path d="M17.998 12.998h-4v-7h-7v-3h-6v20h21v-6h-4v-4zm-15-8h2v3h7v2h-9v-5zm0 7h9v5h-2v-3h-7v-2zm5 9h-5v-5h5v5zm12-2v2h-10v-2h4v-4h2v4h4z" />
      <path d="M15.998.998v11h6v-11h-6zm4 9h-2v-7h2v7z" />
    </g>
  </svg>
);

export default SvgComponent;
