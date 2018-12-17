import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 14.586l-2.293-2.293-1.414 1.414L11 17.414l5.707-5.707-1.414-1.414z" />
      <path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM5 21V3h10v4h4l.001 14H5z" />
    </g>
  </svg>
);

export default SvgComponent;
