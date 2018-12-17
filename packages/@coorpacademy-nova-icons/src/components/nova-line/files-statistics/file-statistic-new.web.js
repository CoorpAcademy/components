import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 11.004h-2v5h-1v-3h-2v3h-1v-7H8v7H7v2h10v-2h-1z" />
      <path d="M16.414 1.002H5c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.587l-4.586-4.585zM5 21.002v-18h10v4h4l.001 14H5z" />
    </g>
  </svg>
);

export default SvgComponent;
