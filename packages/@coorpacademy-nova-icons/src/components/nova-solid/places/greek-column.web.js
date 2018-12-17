import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M18 2H6a4 4 0 1 0 4 4c0-.732-.211-1.41-.555-2h5.109A3.964 3.964 0 0 0 14 6a4 4 0 1 0 4-4zM8 6a2 2 0 1 1-4.001-.001A2 2 0 0 1 8 6zm10 2a2 2 0 1 1 .001-4.001A2 2 0 0 1 18 8zM8 22h2v-7h1v7h2v-7h1v7h2v-9H8z" />
      <path d="M8 10h8v2H8z" />
    </g>
  </svg>
);

export default SvgComponent;
