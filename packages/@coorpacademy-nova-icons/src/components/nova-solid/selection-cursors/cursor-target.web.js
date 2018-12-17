import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      fill="currentColor"
      d="M14 12.002a2 2 0 1 1-3.999.001A2 2 0 0 1 14 12.002zM11 2.001h2v6h-2zM11 16.001h2v6h-2zM2 11.002h6v2H2zM16 11.002h6v2h-6z"
    />
  </svg>
);

export default SvgComponent;
