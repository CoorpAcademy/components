import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2H5.244l2 2h4.508l-.82 3.688 1.676 1.676L13.801 4H19v2h2V3a1 1 0 0 0-1-1zM3.707 3.292L2.293 4.706l7.611 7.612L8.197 20H5v2h8v-2h-2.754l1.334-6.006 7.712 7.713 1.414-1.414z" />
    </g>
  </svg>
);

export default SvgComponent;
