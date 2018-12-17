import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M21 4V2H11v2h3.461l-7.11 16H3v2h10v-2H9.539l7.11-16z"
    />
  </svg>
);

export default SvgComponent;
