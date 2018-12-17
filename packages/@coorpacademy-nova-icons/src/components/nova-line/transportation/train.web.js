import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 16c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1z" />
      <path d="M24 3H12v2h1v5H9.22l.76-3.804A.998.998 0 0 0 9 5H4a.999.999 0 0 0-.98 1.196l.769 3.846a.988.988 0 0 0-.496.251l-3 3A.996.996 0 0 0 0 14v3c0 .334.167.646.445.832l3 2c.164.11.358.168.555.168h.185A2.993 2.993 0 0 0 7 22c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.997 2.997 0 0 0-2.795 1.935L2 16.465v-2.051L4.414 12H14a1 1 0 0 0 1-1V5h6v11.78a2.98 2.98 0 0 0-2-.78c-1.654 0-3 1.346-3 3s1.346 3 3 3a2.996 2.996 0 0 0 2.816-2H22a1 1 0 0 0 1-1V5h1V3zM7 18c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm.78-11l-.6 3H5.82l-.6-3h2.56zM19 20c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1z" />
      <path d="M16 7h4v4h-4zM5 2h3v2H5z" />
    </g>
  </svg>
);

export default SvgComponent;
