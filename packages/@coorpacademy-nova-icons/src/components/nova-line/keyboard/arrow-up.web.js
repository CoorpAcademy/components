import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M16.707 7.293L12 2.586 7.293 7.293l1.414 1.414L11 6.414V22h2V6.414l2.293 2.293z"
    />
  </svg>
);

export default SvgComponent;
