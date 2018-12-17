import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M14.707 10.707L20 5.414V8h2V2h-6v2h2.586l-5.293 5.293zM8 20H5.414l5.293-5.293-1.414-1.414L4 18.586V16H2v6h6zM4 5.414l5.293 5.293 1.414-1.414L5.414 4H8V2H2v6h2zM16 20v2h6v-6h-2v2.586l-5.293-5.293-1.414 1.414L18.586 20z" />
    </g>
  </svg>
);

export default SvgComponent;
