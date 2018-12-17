import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 4h-2a2 2 0 0 0-4 0H8v3h8V4z" />
      <path d="M19 5h-1v3H6V5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-3.465 12.586L14.121 19 12 16.879 9.879 19l-1.414-1.414 2.121-2.122-2.121-2.121 1.414-1.414L12 14.051l2.121-2.121 1.414 1.414-2.121 2.121 2.121 2.121z" />
    </g>
  </svg>
);

export default SvgComponent;
