import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      fill="currentColor"
      d="M15 20.416l-8.414-8.414L15 3.587l1.414 1.415-7 7 7 6.999z"
    />
    <path
      fill="currentColor"
      d="M20 20.416l-8.414-8.414L20 3.587l1.414 1.415-7 7 7 6.999zM10 20.416l-8.414-8.414L10 3.587l1.414 1.415-7 7 7 6.999z"
    />
  </svg>
);

export default SvgComponent;
