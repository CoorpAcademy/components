import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 13.414l-3 3V17h6.08c.052-.362.124-.717.23-1.06a.995.995 0 0 1-1.017-.233L8 13.414z" />
      <path d="M3 19V8h2v5.586l2.293-2.293a.999.999 0 0 1 1.414 0L11 13.586l2.293-2.293.862.862A6.96 6.96 0 0 1 18 11.001V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.104.897 2.001 2 2.001h10.259A6.972 6.972 0 0 1 11.079 19H3zm9-18l5 5h-5V1z" />
      <path d="M24 16.288h-4.286L18 12.001l-1.715 4.287H12l3.708 3.129-1.994 4.585L18 21.168l4.285 2.834-1.993-4.585z" />
    </g>
  </svg>
);

export default SvgComponent;
