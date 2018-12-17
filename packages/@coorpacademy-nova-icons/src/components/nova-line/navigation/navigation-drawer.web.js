import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M4 5h16v2H4zM4 8.999h16v2H4zM4 13h16v2H4zM4 17h16v2H4z"
    />
  </svg>
);

export default SvgComponent;
