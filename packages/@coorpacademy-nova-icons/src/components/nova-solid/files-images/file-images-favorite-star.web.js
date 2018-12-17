import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 19l3-4 2 2 4-5 .643 1.5A6.985 6.985 0 0 1 18 11.002V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h10.259a6.973 6.973 0 0 1-1.18-3H3zm9-18l5 5h-5V1zM5.5 8a2.5 2.5 0 1 1-.002 5.002A2.5 2.5 0 0 1 5.5 8z" />
      <path d="M24 16.287h-4.286L18 12.001l-1.715 4.286H12l3.708 3.13-1.994 4.584L18 21.167l4.285 2.834-1.993-4.584z" />
    </g>
  </svg>
);

export default SvgComponent;
