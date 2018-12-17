import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 17h4v2h-4z" />
      <path d="M23.633 19.738L22 14.84V3.003a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1V14.84L.367 19.737c-.186.558-.109 1.13.208 1.572.318.441.837.694 1.425.694h20c.588 0 1.107-.253 1.425-.694.317-.442.393-1.014.208-1.571zM10 5.003c1.104 0 2 1 2 2 0-1 .896-2 2-2s2 .895 2 2c0 3-4 6-4 6s-4-3-4-6a2 2 0 0 1 2-2zm-7.612 15l1.333-4H20.28l1.333 4H2.388z" />
    </g>
  </svg>
);

export default SvgComponent;
