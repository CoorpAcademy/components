import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 17.998v-2h2V6.995h2v9.002h1v-4.002h2v4.001h.262c.17-.659.415-1.287.738-1.87V9.995h2v1.762a7.958 7.958 0 0 1 5-1.761V4.581L13.414-.005H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h9.079A7.938 7.938 0 0 1 10 17.996l-7 .002zM12 .995l5 5h-5v-5z" />
      <path d="M18 11.981c-3.309 0-6 2.692-6 6s2.691 6 6 6 6-2.692 6-6-2.691-6-6-6zm3 6.999h-4v-5h2v3h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
