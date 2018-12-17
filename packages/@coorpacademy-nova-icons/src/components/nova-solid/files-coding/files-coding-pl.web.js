import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 14.007H8v2h1a1.001 1.001 0 0 0 0-2z" />
      <path d="M16.414 1.007H5c-1.103 0-2 .896-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zM9 18.007H8v2H6v-8h3c1.654 0 3 1.346 3 3s-1.346 3-3 3zm9 2h-5v-8h2v6h3v2zm-3-13v-5l5 5h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
