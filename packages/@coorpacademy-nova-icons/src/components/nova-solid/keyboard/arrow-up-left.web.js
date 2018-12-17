import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M19.707 18.293L7.414 6H11V4H4v7h2V7.414l12.293 12.292z"
    />
  </svg>
);

export default SvgComponent;
