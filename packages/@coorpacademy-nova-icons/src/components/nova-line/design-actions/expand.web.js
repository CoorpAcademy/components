import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 11V4H4c-1.103 0-2 .898-2 2v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-8H12zm-8 8V6h6v7h10l.001 6H4z" />
      <path d="M21 4h-8v6h8V4zm-2 4h-4V6h4v2z" />
    </g>
  </svg>
);

export default SvgComponent;
