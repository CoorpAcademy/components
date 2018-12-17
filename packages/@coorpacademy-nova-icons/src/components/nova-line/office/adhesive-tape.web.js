import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 9c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2 0-1.102.897-2 2-2s2 .898 2 2c0 1.103-.897 2-2 2z" />
      <path d="M14.273 19A7.973 7.973 0 0 0 17 13c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8h13v-2h-7.727zM3 13c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6z" />
    </g>
  </svg>
);

export default SvgComponent;
