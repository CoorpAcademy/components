import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M18 20V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16h12zm-4-10h2v5h-2v-5zM3 21h18v2H3z" />
    </g>
  </svg>
);

export default SvgComponent;
