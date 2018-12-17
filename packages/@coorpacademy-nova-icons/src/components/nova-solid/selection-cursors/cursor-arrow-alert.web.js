import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      fill="currentColor"
      d="M3 3.001l3 9.001 1-5 5-1zM15 8.002a7 7 0 1 0 .001 14.001A7 7 0 0 0 15 8.002zm-1.001 3h2v5h-2v-5zM15 20.001a1 1 0 1 1-.002-1.998A1 1 0 0 1 15 20z"
    />
  </svg>
);

export default SvgComponent;
