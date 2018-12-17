import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M22 11H6.414l2.293-2.293-1.414-1.414L2.586 12l4.707 4.707 1.414-1.414L6.414 13H22z"
    />
  </svg>
);

export default SvgComponent;
