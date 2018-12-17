import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2.002h20V2zM3 3a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM18 10a8.05 8.05 0 0 1 2 .262v-5.26H0V16c0 1.103.896 2 2 2h8a8 8 0 0 1 8-8z" />
      <path d="M18 12c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm-4 6c0-2.206 1.794-4 4-4 .739 0 1.425.216 2.02.566l-5.453 5.453A3.957 3.957 0 0 1 14 18zm4 4a3.959 3.959 0 0 1-2.019-.566l5.452-5.452c.352.594.567 1.279.567 2.018 0 2.206-1.794 4-4 4z" />
    </g>
  </svg>
);

export default SvgComponent;
