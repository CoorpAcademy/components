import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M10 20H2c-1.103 0-2-.897-2-2V2C0 .896.897 0 2 0h7.531c.596 0 1.156.262 1.537.72l4.468 5.362A2 2 0 0 1 16 7.362V10h-2V7.362L9.532 2H2v16h8v2z"
      fill="currentColor"
    />
    <path
      fill="currentColor"
      d="M3 4h2v3H3zM6 4h2v3H6zM18 12c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.739 0 1.424.215 2.019.566l-5.452 5.452A3.944 3.944 0 0 1 14 18c0-2.205 1.794-4 4-4zm0 8a3.959 3.959 0 0 1-2.019-.566l5.452-5.453A3.95 3.95 0 0 1 22 18c0 2.205-1.794 4-4 4z"
    />
  </svg>
);

export default SvgComponent;
