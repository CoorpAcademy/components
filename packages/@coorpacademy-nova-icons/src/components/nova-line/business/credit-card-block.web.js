import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 8h4v2h-4zM3 8h7v2H3zM3 11h5v2H3z" />
      <path d="M2 7h15.999l-.001 3H20V2c0-1.102-.896-2-2-2H2C.896 0 0 .898 0 2v12c0 1.103.896 2 2 2h8v-2H2V7zm16-5l-.001 3H2V2h16z" />
      <path d="M18 12c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.74 0 1.424.215 2.02.567l-5.453 5.452A3.947 3.947 0 0 1 14 18c0-2.206 1.795-4 4-4zm0 8c-.74 0-1.424-.215-2.02-.566l5.453-5.453A3.95 3.95 0 0 1 22 18c0 2.206-1.795 4-4 4z" />
    </g>
  </svg>
);

export default SvgComponent;
