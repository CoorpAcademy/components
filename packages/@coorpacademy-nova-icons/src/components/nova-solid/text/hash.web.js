import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M19.721 4h-2.108L16.28 8h-4.892l1.333-4h-2.108L9.279 8H5v2h3.612l-1.333 4H3v2h3.612l-1.333 4h2.108l1.333-4h4.892l-1.333 4h2.108l1.333-4H20v-2h-3.612l1.333-4H22V8h-3.612l1.333-4zm-5.442 10H9.388l1.333-4h4.892l-1.334 4z"
    />
  </svg>
);

export default SvgComponent;
