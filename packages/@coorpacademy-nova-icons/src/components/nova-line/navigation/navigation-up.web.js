import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M19 16.416l-7-7-7 7-1.414-1.415L12 6.587l8.414 8.414z"
    />
    <path
      fill="currentColor"
      d="M19 21.416l-7-7-7 7-1.414-1.415L12 11.587l8.414 8.414zM19 11.416l-7-7-7 7-1.414-1.415L12 1.587l8.414 8.414z"
    />
  </svg>
);

export default SvgComponent;
