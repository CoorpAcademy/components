import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M8 11l-.364 2h8.728L16 11a2 2 0 0 0 2-2V5h-2v2h-3V5h-2v2H8V5H6v4a2 2 0 0 0 2 2zM1 14v3h1v4a1 1 0 0 0 1 1h7v-2a2 2 0 0 1 4 0v2h7a1 1 0 0 0 1-1v-4h1v-3H1z" />
    </g>
  </svg>
);

export default SvgComponent;
