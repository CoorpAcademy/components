import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M13 4v2h3.586L4.293 18.293l1.414 1.413L18 7.414V11h2V4z"
    />
  </svg>
);

export default SvgComponent;
