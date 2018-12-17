import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M19 1h-6V0h-2v1H5C3.346 1 2 2.346 2 4v17a1 1 0 0 0 1 1h1a2 2 0 1 0 4 0h8a2 2 0 1 0 4 0h1a1 1 0 0 0 1-1V4c0-1.654-1.346-3-3-3zm1 19H4V4c0-.551.449-1 1-1h6v2h2V3h6c.551 0 1 .449 1 1v16z" />
      <path d="M17 12h-2v-1c0-1.654-1.346-3-3-3s-3 1.346-3 3v1H7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm-6-1c0-.551.449-1 1-1s1 .449 1 1v1h-2v-1zm5 6H8v-3h8v3z" />
    </g>
  </svg>
);

export default SvgComponent;
