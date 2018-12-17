import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13.707 11.706L20 5.413v2.586h2v-6h-6v2h2.586l-6.293 6.293zM8 19.999H5.414l6.293-6.293-1.414-1.414L4 18.585v-2.586H2v6h6z" />
    </g>
  </svg>
);

export default SvgComponent;
