import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2.002h20V2zM3 3a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM18 10a8.05 8.05 0 0 1 2 .262v-5.26H0V16c0 1.103.896 2 2 2h8a8 8 0 0 1 8-8z" />
      <path d="M18 11.999c-3.309 0-6 2.693-6 6 0 3.309 2.691 6 6 6 3.308 0 6-2.691 6-6 0-3.307-2.692-6-6-6zm1 10h-2v-4h2v4zM18 17a1 1 0 1 1 0-2 1 1 0 1 1 0 2z" />
    </g>
  </svg>
);

export default SvgComponent;
