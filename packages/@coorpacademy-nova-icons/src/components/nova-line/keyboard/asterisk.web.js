import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M22 10.999h-8.267l4.133-7.159-1.732-1L12 9.999 7.867 2.84l-1.732 1 4.133 7.159H2v2h8.269L6.134 20.16l1.732 1L12 14l4.135 7.16 1.732-1-4.135-7.161H22z"
    />
  </svg>
);

export default SvgComponent;
