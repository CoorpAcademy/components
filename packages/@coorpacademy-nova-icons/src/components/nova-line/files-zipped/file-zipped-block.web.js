import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6 4h2v2H6zM4 6h2v2H4zM6 8h2v2H6zM4 10h2v2H4z" />
      <path d="M2 2h2v2h2V2h8l.001 8H16V2c0-1.104-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h8v-2H2V2z" />
      <path d="M18 12c-3.309 0-6 2.691-6 6 0 3.31 2.691 6 6 6s6-2.69 6-6c0-3.309-2.691-6-6-6zm-4 6c0-2.206 1.795-4 4-4 .739 0 1.424.215 2.02.567l-5.453 5.452A3.947 3.947 0 0 1 14 18zm4 4a3.965 3.965 0 0 1-2.02-.566l5.453-5.453A3.95 3.95 0 0 1 22 18c0 2.206-1.795 4-4 4z" />
    </g>
  </svg>
);

export default SvgComponent;
