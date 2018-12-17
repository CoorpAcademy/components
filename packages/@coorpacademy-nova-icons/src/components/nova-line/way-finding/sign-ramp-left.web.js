import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M14 9.175l5.349 4.584 1.302-1.518L15.703 8H18V6h-6v6h2zM19.581 20.186l-14-10A1 1 0 0 0 4 11v10a1 1 0 0 0 1 1h14a.999.999 0 0 0 .581-1.814zM6 20v-7.057L15.879 20H6z" />
    </g>
  </svg>
);

export default SvgComponent;
