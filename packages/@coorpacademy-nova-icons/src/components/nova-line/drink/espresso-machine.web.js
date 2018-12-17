import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 3H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v2H3v2h3v1h2v-1h1v-2H8v-2h3v8H2v2h20V4a1 1 0 0 0-1-1zm-9 6H6V5h14v1h-4v2h4v1h-4v2h4v1h-3a1 1 0 0 0-1 1v6h-3v-9a1 1 0 0 0-1-1zm6 10v-5h2v5h-2z" />
      <path d="M7 6h4v2H7z" />
    </g>
  </svg>
);

export default SvgComponent;
