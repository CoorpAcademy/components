import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path fill="currentColor" d="M18 22.001H3a1 1 0 0 1-1-1v-15h2v14h14v2z" />
    <path
      fill="currentColor"
      d="M21 2.001H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1zm-7 12s-4-3-4-6c0-1.106.894-2 2-2 1.104 0 2 1 2 2 0-1 .894-2 2-2a2 2 0 0 1 2 2c0 3-4 6-4 6z"
    />
  </svg>
);

export default SvgComponent;
