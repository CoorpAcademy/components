import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 8.999c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.993 2.993 0 0 0-2.815 2H2v2h14.185a2.993 2.993 0 0 0 2.815 2zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM9 8.999a2.993 2.993 0 0 0-2.815 2H2v2h4.185c.414 1.162 1.514 2 2.815 2s2.401-.838 2.815-2H22v-2H11.815a2.993 2.993 0 0 0-2.815-2zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM19 14.999a2.993 2.993 0 0 0-2.815 2H2v2h14.185a2.994 2.994 0 0 0 2.815 2c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </g>
  </svg>
);

export default SvgComponent;
