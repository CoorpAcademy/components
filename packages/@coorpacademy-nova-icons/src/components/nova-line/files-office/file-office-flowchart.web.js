import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 10.25h-3.75v3.25H9V12H6v4h3v-1.5h1.25v3.25H14V19h3v-4h-3v1.25h-2.25v-4.5H14V13h3V9h-3z" />
      <path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM5 21V3h10v4h4l.001 14H5z" />
    </g>
  </svg>
);

export default SvgComponent;
