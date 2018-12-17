import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M9 20.416l-1.414-1.415 7-7-7-7L9 3.587l8.414 8.414z"
    />
    <path
      fill="currentColor"
      d="M4 20.416l-1.414-1.415 7-7-7-7L4 3.587l8.414 8.414zM14 20.416l-1.414-1.415 7-7-7-7L14 3.587l8.414 8.414z"
    />
  </svg>
);

export default SvgComponent;
