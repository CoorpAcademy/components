import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.004h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M16 8h1V5c0-1.654-1.346-3-3-3h-2v2h2c.551 0 1 .449 1 1v1.038c-3.098.237-5.887 1.573-8 3.607V7h2V5H3v2h2v5h.052a12.968 12.968 0 0 0-1.707 4.077A3.002 3.002 0 0 0 1 19c0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.17-.68-2.175-1.659-2.669C6.539 11.554 10.856 8 16 8z" />
      <path d="M16 10c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 8a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 18z" />
    </g>
  </svg>
);

export default SvgComponent;
