import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 19l3-4 2 2 4-5 .21.491a7.968 7.968 0 0 1 5.79-2.49V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h9.079a7.94 7.94 0 0 1-1.01-3H3zm9-18l5 5h-5V1zM5.5 8a2.5 2.5 0 1 1-.002 5.002A2.5 2.5 0 0 1 5.5 8z" />
      <path d="M18 11.986c-3.309 0-6 2.691-6 6 0 3.307 2.691 6 6 6s6-2.693 6-6c0-3.308-2.691-6-6-6zm3 7h-4v-5h2v3h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
