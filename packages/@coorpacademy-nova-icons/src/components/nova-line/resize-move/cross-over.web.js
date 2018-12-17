import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .005h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 3.999v-2H2v7h2V5.413l16.293 16.293 1.414-1.414L5.414 3.999z" />
      <path d="M9.293 13.292L4 18.585v-3.586H2v7h7v-2H5.414l5.293-5.293zM14.707 10.706l-1.414-1.414 7-7 1.414 1.415z" />
    </g>
  </svg>
);

export default SvgComponent;
