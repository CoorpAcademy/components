import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M16.949 15.684L13 3.838V2h-2v1.838L7.051 15.684A.998.998 0 0 0 8 17h2.996v2.5c0 1.379 1.122 2.5 2.5 2.5s2.5-1.121 2.5-2.5V19h-2v.5a.5.5 0 0 1-1 0V17H16a1 1 0 0 0 .949-1.316zM9.387 15L12 7.162 14.613 15H9.387z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
