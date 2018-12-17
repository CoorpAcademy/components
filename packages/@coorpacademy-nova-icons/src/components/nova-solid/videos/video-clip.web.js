import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9.748 15.575l5.492-3.139a.499.499 0 0 0 0-.868L9.748 8.431a.502.502 0 0 0-.499 0A.503.503 0 0 0 9 8.865v6.277c0 .178.095.343.249.433a.502.502 0 0 0 .499 0z" />
      <path d="M19 2.005v1.998H5V2.005H2v20h3v-2.002h14v2.002h3v-20h-3zM5 17.003v-10h14v10H5z" />
    </g>
  </svg>
);

export default SvgComponent;
