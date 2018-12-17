import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <path
      fill="currentColor"
      d="M21 3h-2V1h-2v5h-1V3H8V1H6v5H5V3H3c-1.103 0-2 .898-2 2v15c0 1.102.897 2 2 2h18c1.103 0 2-.898 2-2V5c0-1.103-.897-2-2-2zm-3.066 8.155a1 1 0 0 1-.537.561l-2.732 1.204-2.191 4.003-1.797.934 1.523-3.954-2.2 1.015-4-2.006L7.584 12l2.102.94 2.43-1.082H12L8.881 9.832 10.488 9l3.321 2.103 2.806-1.249a1.012 1.012 0 0 1 1.319 1.301z"
    />
  </svg>
);

export default SvgComponent;
