import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M4.816 15.002L18.63 3.777l-1.26-1.55L1.646 15.002H1v4c0 1.104.897 2 2 2h18c1.103 0 2-.896 2-2v-4H4.816zm-1.816 4v-2h18l.001 2H3z" />
      <path d="M12 12.002h10v2H12z" />
    </g>
  </svg>
);

export default SvgComponent;
