import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      d="M11 22a1 1 0 0 1-1-1v-7H5a1 1 0 0 1-.78-1.625l8-10A1 1 0 0 1 14 3v7h5a1 1 0 0 1 .78 1.625l-8 10A1 1 0 0 1 11 22zM7.081 12H11a1 1 0 0 1 1 1v5.15L16.919 12H13a1 1 0 0 1-1-1V5.85L7.081 12z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
