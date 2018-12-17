import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.707 6.293L12 1.586 7.293 6.293l1.414 1.414L11 5.414V15h2V5.414l2.293 2.293zM15.858 15c-.446 1.723-1.997 3-3.858 3s-3.412-1.277-3.858-3H2v7h20v-7h-6.142z" />
    </g>
  </svg>
);

export default SvgComponent;
