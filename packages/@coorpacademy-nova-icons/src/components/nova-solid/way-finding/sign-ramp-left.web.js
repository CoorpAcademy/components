import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M4 9v13h18zM14 9.175l5.349 4.584 1.302-1.518L15.703 8H18V6h-6v6h2z" />
    </g>
  </svg>
);

export default SvgComponent;
