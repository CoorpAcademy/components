import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 12c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6c0-3.308-2.691-6-6-6zm-1 8v-4l3 2-3 2z" />
      <path d="M6 20h4.262A8.032 8.032 0 0 1 10 18a8 8 0 0 1 8-8V1a1 1 0 0 0-1-1H6v20zM4 .001H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20z" />
    </g>
  </svg>
);

export default SvgComponent;
