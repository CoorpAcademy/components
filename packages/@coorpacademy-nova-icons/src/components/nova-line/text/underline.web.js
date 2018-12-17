import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 20h16v2H4zM14 2v2h2v8c0 2.206-1.794 4-4 4s-4-1.794-4-4V4h2V2H4v2h2v8c0 3.309 2.691 6 6 6s6-2.691 6-6V4h2V2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
