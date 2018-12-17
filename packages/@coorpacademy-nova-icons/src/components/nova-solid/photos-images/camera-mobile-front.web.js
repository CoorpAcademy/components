import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 10.191V20H5V7h3.349A5.96 5.96 0 0 1 8 5.001c0-.702.127-1.374.349-2H5a2 2 0 0 0-2 2v17h16V8.314a6.027 6.027 0 0 1-2 1.877z" />
      <path d="M14 9l1.091-2.908L18 5.001 15.091 3.91 14 1l-1.091 2.91L10 5.001l2.909 1.091zM10 15c-1.841 0-3 1.159-3 3h8c0-1.841-1.159-3-3-3h-2z" />
      <circle cx={11} cy={12} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
