import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0H24v24H-.001z" />
    <g fill="currentColor">
      <path d="M22 16H2v2h1.586l1.707 1.706A.994.994 0 0 0 6 20h12c.266 0 .52-.105.707-.294L20.414 18H22v-2zM21 15c0-4.624-3.507-8.441-8-8.94V4h-2v2.06c-4.493.499-8 4.316-8 8.94h18zm-9-7v2a4.99 4.99 0 0 0-4.157 2.223L6.181 11.11A6.99 6.99 0 0 1 12 8z" />
    </g>
  </svg>
);

export default SvgComponent;
