import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M20.526 2.15a.998.998 0 0 0-.973-.044L15.764 4H8.236L4.447 2.106A.998.998 0 0 0 3 3v13a1 1 0 0 0 .47.848l8 5a1.002 1.002 0 0 0 1.06 0l8-5A1 1 0 0 0 21 16V3a1 1 0 0 0-.474-.85zM19 15.446l-7 4.375-7-4.375V4.619l2.553 1.275A.99.99 0 0 0 8 6h8c.155 0 .309-.036.447-.105L19 4.619v10.827z" />
      <path d="M13 8h-2v2H9v2h2v4h2v-4h2v-2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
