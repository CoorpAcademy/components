import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M23.707 5.292L19 .585l-4.707 4.707 1.414 1.415L18 4.414V10h2V4.414l2.293 2.293zM14 12H2c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zm-2.121 2L8 16.77 4.121 14h7.758zM2 22v-7.057l5.419 3.87a1 1 0 0 0 1.162 0L14 14.943 14.001 22H2z" />
    </g>
  </svg>
);

export default SvgComponent;
